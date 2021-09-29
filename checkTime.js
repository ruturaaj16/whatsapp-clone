const moment = require("moment-timezone");

function checkTime() {
  const day = moment().tz("Asia/Colombo").format("dddd");
  const hoursRestricted = Number(moment().tz("Asia/Colombo").format("HH"));
  if (["Saturday", "Sunday"].indexOf(day) == -1) {
    if ([8, 9, 10, 11].indexOf(hoursRestricted) == -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

module.exports = {
  checkTime: checkTime,
};
