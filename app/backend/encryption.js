const nodeCrypto = require("crypto");
const { Buffer } = require("buffer");

const app = {
  encrypt: function (data, password) {
    const salt = nodeCrypto.randomBytes(16);
    const key = nodeCrypto.pbkdf2Sync(password, salt, 5, 32, "sha256");
    const cipher = nodeCrypto.createCipheriv("aes-256-gcm", key, salt);
    const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
    const authTag = cipher.getAuthTag();
    return Buffer.concat([salt, authTag, encryptedData]);
  },
  decrypt: function (data, password) {
    const salt = data.subarray(0, 16);
    const authTag = data.subarray(16, 32);
    const encData = data.subarray(32, data.length);
    const key = nodeCrypto.pbkdf2Sync(password, salt, 5, 32, "sha256");
    const decipher = nodeCrypto.createDecipheriv("aes-256-gcm", key, salt);
    decipher.setAuthTag(authTag);

    try {
      const plainText = Buffer.concat([
        decipher.update(encData),
        decipher.final(),
      ]);
      return plainText;
    } catch (e) {
      return true;
    }
  },
};

module.exports.app = app;