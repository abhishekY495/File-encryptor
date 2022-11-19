const path = require("path");
const { app, BrowserWindow, Menu, shell } = require("electron");
const { createAboutWindow } = require("./about.js");
const { desktopNotificationSettings, saveDesktopNotificationSettings } = require("./notificationSettings.js");
const { scrambleFileNameSettings, saveScrambleFileNameSetting } = require("./scrambleFileName.js");

let notification = desktopNotificationSettings();
let scramble = scrambleFileNameSettings();

const isMac = process.platform === "darwin";
const isDev = false;  // Set to true for DevTools

if(process.platform === "win32") {
  app.setAppUserModelId(app.name);
}

let mainWindow;
function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "File encryptor",
    width: 420,
    height: 690,
    resizable: isDev ? true : false ,
    icon: path.join(__dirname, "./icons/app-icon.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  // Open DevTools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "../src/index.html"));
}

const menuTemplate = [
  {
    label: "Help",
    submenu: [
      {
        label: "About",
        click: createAboutWindow,
      },
      {
        label: "Project code - Github",
        click: () => shell.openExternal("https://github.com/abhishake21/File-encryptor"),
      },
      {
        label: "Desktop Notifications",
        type: "checkbox",
        checked: notification,
        click: () => {
          saveDesktopNotificationSettings((notification = !notification));
          mainWindow.reload();
        },
      },
      {
        label: "Un/Scramble File names",
        type: "checkbox",
        checked: scramble,
        click: () => {
          saveScrambleFileNameSetting((scramble = !scramble));
          mainWindow.reload();
        },
      },
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: `CmdOrCtrl+W`,
      },
    ],
  }
];

app.whenReady().then(() => {
  createMainWindow();

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
