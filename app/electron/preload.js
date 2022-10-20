const { contextBridge } = require('electron');
const fs = require('fs');
const crypto = require('crypto');
const stream = require('stream');

contextBridge.exposeInMainWorld('fs', {
    readFileSync: (...args) => fs.readFileSync(...args),
    createReadStream: () => fs.createReadStream(),
    createWriteStream: () => fs.createWriteStream()
})

contextBridge.exposeInMainWorld('stream', {
    Transform: (...args) => stream.Transform(...args)
})