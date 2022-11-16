const Store = require("electron-store");
const storage = new Store();

function desktopNotificationSettings() {
  const defaultNotification = false;
  const notification = storage.get("set-notification");

  if (notification) return notification;
  else {
    storage.set("set-notification", defaultNotification);
    return defaultNotification;
  }
}

function saveDesktopNotificationSettings(notification) {
  storage.set("set-notification", notification);
}

module.exports.desktopNotificationSettings = desktopNotificationSettings;
module.exports.saveDesktopNotificationSettings = saveDesktopNotificationSettings;
