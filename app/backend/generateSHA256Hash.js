const nodeCrypto = require("crypto");

function generateSHA256Hash(password) {
  const hash = nodeCrypto.createHash("sha256").update(password).digest("hex");
  return hash;
}

module.exports.generateSHA256Hash = generateSHA256Hash;
