const path = require("path");
const fs = require("fs");
const { pipeline } = require("stream/promises");
const { Transform } = require("stream");
const { app } = require("./encryption.js");
const { encHighWaterMark } = require("./encryptFile.js");

const decHighWatermark = encHighWaterMark + 32;

async function decryptFile(encFileLocation, password) {
  const fileReadStream = fs.createReadStream(encFileLocation, {
    highWaterMark: decHighWatermark,
  });

  const filePath = path.parse(encFileLocation).dir;
  let fileName = path.parse(encFileLocation).name;

  let newDecFile;
  if (fileName.includes("_")) {
    fileName = fileName.split("_").slice(0, -1).join("_");
    const fileExt = path.parse(encFileLocation).ext;
    newDecFile = filePath + "\\" + fileName + "_DEC" + fileExt;
  } else {
    const fileExt = path.parse(encFileLocation).ext;
    newDecFile = filePath + "\\" + fileName + "_DEC" + fileExt;
  }

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
            console.log("File Decrypted");
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