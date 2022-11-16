const Store = require("electron-store");
const storage = new Store();

function scrambleFileNameSettings() {
  const defaultSetting = false;
  const setScrambleFileNameSetting = storage.get("set-Scramble");

  if (setScrambleFileNameSetting) return setScrambleFileNameSetting;
  else {
    storage.set("set-Scramble", defaultSetting);
    return defaultSetting;
  }
}

function saveScrambleFileNameSetting(setScrambleFileNameSetting) {
  storage.set("set-Scramble", setScrambleFileNameSetting);
}

module.exports.scrambleFileNameSettings = scrambleFileNameSettings;
module.exports.saveScrambleFileNameSetting = saveScrambleFileNameSetting;
