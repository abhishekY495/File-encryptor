const path = require("path");
const fs = require("fs");
const { pipeline } = require("stream/promises");
const { Transform } = require("stream");
const { app } = require("./encryption.js");
const { encHighWaterMark } = require("./encryptFile.js");
const { railfence } = require("./railfenceCipher.js");
const { scramble } = require("../electron/settings.js");

const decHighWatermark = encHighWaterMark + 32;

async function decryptFile(encFileLocation, password) {
  const fileReadStream = fs.createReadStream(encFileLocation, {
    highWaterMark: decHighWatermark,
  });

  const filePath = path.parse(encFileLocation).dir;
  const fileExt = path.parse(encFileLocation).ext;
  let fileName = path.parse(encFileLocation).name;

  if(scramble) {
    fileName = railfence.decipher(fileName);
  } else if (fileName.includes("__ENC")) {
    fileName = fileName.split("__ENC").slice(0, -1).join("__ENC");
  } else {
    fileName = fileName + "__DEC";
  }

  const newDecFile = filePath + "\\" + fileName + fileExt;
  const fileWriteStream = fs.createWriteStream(newDecFile);

  try {
    await pipeline(
      fileReadStream,
      new Transform({
        transform(chunk, encoding, callback) {
          const decryptedData = app.decrypt(chunk, password);
          if (decryptedData === true) {
            fileWriteStream.destroy();
            fs.unlinkSync(newDecFile);
          } else {
            callback(null, decryptedData);
          }
        },
      }),
      fileWriteStream
    );
  } catch (err) {
    throw err;
  }
}

module.exports.decryptFile = decryptFile;