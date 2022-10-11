const path = require('path');
const { BrowserWindow } = require('electron');

function createAboutWindow() {
    const aboutWindow = new BrowserWindow({
        title: "About",
        width: 400,
        height: 200,
        autoHideMenuBar: true
    });
    aboutWindow.loadFile(path.join(__dirname, '../src/about.html'));
}

module.exports.createAboutWindow = createAboutWindow;