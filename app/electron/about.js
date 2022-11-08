const path = require("path");
const { BrowserWindow } = require("electron");

function createAboutWindow() {
  const aboutWindow = new BrowserWindow({
    title: "About",
    width: 400,
    height: 200,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "./icons/about-icon.ico"),
  });
  aboutWindow.loadFile(path.join(__dirname, "../src/about.html"));
}

module.exports.createAboutWindow = createAboutWindow;