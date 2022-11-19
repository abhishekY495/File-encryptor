const { desktopNotificationSettings } = require("./notificationSettings.js");
const { scrambleFileNameSettings } = require("./scrambleFileName.js");

let notification = desktopNotificationSettings();
let scramble = scrambleFileNameSettings();

module.exports.notification = notification;
module.exports.scramble = scramble;