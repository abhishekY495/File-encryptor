const fs = require("fs");
const { Transform } = require("stream");
const { app } = require("./encryption.js");

const stream = {
  encryptStream(password, readStream, writeStream) {
    return new Transform({
      transform(chunk, encoding, callback) {
        const encryptedData = app.encrypt(chunk, password);
        callback(null, encryptedData);
        console.log("File encrypted");
        readStream.destroy();
        writeStream.destroy();
      },
    });
  },
  decryptStream(password, newDecFile, readStream, writeStream) {
    return new Transform({
      transform(chunk, encoding, callback) {
        const DecryptedData = app.decrypt(chunk, password);
        if (DecryptedData === true) {
          console.log("Wrong Password");
          readStream.destroy();
          writeStream.destroy();
          fs.unlinkSync(newDecFile);
        } else {
          callback(null, DecryptedData);
          console.log("File decrypted");
          readStream.destroy();
          writeStream.destroy();
        }
      },
    });
  },
};

module.exports.stream = stream;