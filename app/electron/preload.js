const { contextBridge } = require('electron');
const fs = require('fs');
const crypto = require('crypto');

contextBridge.exposeInMainWorld('fs', {
    readFileSync: (...args) => fs.readFileSync(...args)
});