const { notification } = require("../electron/menuTemplate.js");

function sendNotification(title, message) {
  if (notification) {
    return new Notification(title, {
      body: message,
      icon: "../../assets/icons/app-icon.ico",
    });
  } else return;
}

module.exports.sendNotification = sendNotification;