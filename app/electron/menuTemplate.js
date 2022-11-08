const { createAboutWindow } = require("./about.js");
const { app, shell } = require("electron");

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
        click: () =>
          shell.openExternal("https://github.com/abhishake21/File-encryptor"),
      },
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: `CmdOrCtrl+W`,
      },
    ],
  },
];

module.exports.menuTemplate = menuTemplate;
