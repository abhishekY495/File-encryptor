const path = require("path");
const fs = require("fs");
const { pipeline } = require("stream/promises");
const { Transform } = require("stream");
const { app } = require("./encryption.js");

const encHighWaterMark = 1024 * 1024 * 100;

async function encryptFile(fileLocation, password) {
  const fileReadStream = fs.createReadStream(fileLocation, {
    highWaterMark: encHighWaterMark,
  });

  const filePath = path.parse(fileLocation).dir;
  const fileName = path.parse(fileLocation).name;
  const fileExt = path.parse(fileLocation).ext;
  const newEncFile = filePath + "\\" + fileName + "_ENC" + fileExt;
  const fileWriteStream = fs.createWriteStream(newEncFile);

  await pipeline(
    fileReadStream,
    new Transform({
      transform(chunk, encoding, callback) {
        const encryptedData = app.encrypt(chunk, password);
        callback(null, encryptedData);
      },
    }),
    fileWriteStream
  );
}

module.exports.encryptFile = encryptFile;
module.exports.encHighWaterMark = encHighWaterMark;