const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
const { menuTemplate } = require('./menuTemplate.js');

// 
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'development';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "File encryptor",
        width: 420,
        height: 690,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js')
        }
    });

    // Open DevTools
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, '../src/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        };
    });
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    };
});