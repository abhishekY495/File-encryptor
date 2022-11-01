const path = require("path");
const fs = require("fs");
const { stream } = require("./transformStream.js");

const encHighWaterMark = 1024 * 1024 * 100;
const decHighWatermark = encHighWaterMark + 32;

const file = {
  encrypt(fileLocation, password) {
    const fileReadStream = fs.createReadStream(fileLocation, {
      highWaterMark: encHighWaterMark,
    });
    fileReadStream.on("error", (err) => {
      fs.unlinkSync(newEncFile);
      console.log("File not found.");
    });

    const filePath = path.parse(fileLocation).dir;
    const fileName = path.parse(fileLocation).name;
    const fileExt = path.parse(fileLocation).ext;
    const newEncFile = filePath + "\\" + fileName + "_ENC" + fileExt;

    const fileWriteStream = fs.createWriteStream(newEncFile);
    fileReadStream
      .pipe(stream.encryptStream(password, fileReadStream, fileWriteStream))
      .pipe(fileWriteStream);
  },
  decrypt(encFileLocation, password) {
    const fileReadStream = fs.createReadStream(encFileLocation, {
      highWaterMark: decHighWatermark,
    });
    fileReadStream.on("error", (err) => {
      fs.unlinkSync(newDecFile);
      console.log("File not found");
    });

    const filePath = path.parse(encFileLocation).dir;
    const fileName = path
      .parse(encFileLocation)
      .name.split("_")
      .slice(0, -1)
      .join("_");
    const fileExt = path.parse(encFileLocation).ext;
    const newDecFile = filePath + "\\" + fileName + "_DEC" + fileExt;

    const fileWriteStream = fs.createWriteStream(newDecFile);
    fileReadStream
      .pipe(
        stream.decryptStream(
          password,
          newDecFile,
          fileReadStream,
          fileWriteStream
        )
      )
      .pipe(fileWriteStream);
  },
};

module.exports.file = file;