const path = require('path');
const { app, BrowserWindow, Menu, shell } = require('electron');

// 
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'development';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "File encryptor",
        width: 1000,
        height: 600
    });

    // Open DevTools if in dev-env
    if(isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    // Menu
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

// Menu Template
const menuTemplate = [
    {
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click: () => shell.openExternal('')
            },
            {
                label: 'Quit',
                click: () => app.quit(),
                accelerator: `CmdOrCtrl+Q`
            }
        ]
    }
]

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
})