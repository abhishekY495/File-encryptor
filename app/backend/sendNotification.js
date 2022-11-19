const { notification } = require("../electron/settings.js");

function sendNotification(title, message) {
  if (notification) {
    return new Notification(title, {
      body: message,
      icon: "../../assets/icons/app-icon.ico",
    });
  } else return;
}

module.exports.sendNotification = sendNotification;