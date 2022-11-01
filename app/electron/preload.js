const { contextBridge } = require('electron');
const { file } = require('../backend/fileEncDec.js');

contextBridge.exposeInMainWorld('file', file);