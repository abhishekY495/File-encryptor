const { contextBridge } = require("electron");
const { encryptFile } = require("../backend/encryptFile.js");
const { decryptFile } = require("../backend/decryptFile.js");

contextBridge.exposeInMainWorld("encryptFile", encryptFile);
contextBridge.exposeInMainWorld("decryptFile", decryptFile);