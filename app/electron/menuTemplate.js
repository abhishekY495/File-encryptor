const { app, shell } = require("electron");
const { createAboutWindow } = require("./about.js");
const { desktopNotificationSettings, saveDesktopNotificationSettings } = require("./notificationSettings.js");
const { scrambleFileNameSettings, saveScrambleFileNameSetting } = require("./scrambleFileName.js");

let notification = desktopNotificationSettings();
let scramble = scrambleFileNameSettings();
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
        click: () => saveDesktopNotificationSettings((notification = !notification)),
      },
      {
        label: "Un/Scramble File names",
        type: "checkbox",
        checked: scramble,
        click: () => saveScrambleFileNameSetting((scramble = !scramble)),
      },
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: `CmdOrCtrl+W`,
      },
    ],
  },
  {
    label: "Reload",
    role: "reload"
  }
];

module.exports.menuTemplate = menuTemplate;
module.exports.notification = notification;
module.exports.scramble = scramble;
