import notificationsOff from "../icons/bell-slash.svg";
import notificationsOn from "../icons/bell.svg";
import signalOn from "../icons/wifi.svg";
import signalOff from "../icons/wifi-exclamation.svg";
import settings from "../icons/gear.svg";
import darkThemeOn from "../icons/eye-dropper-full.svg";
import darkThemeOff from "../icons/eye-dropper.svg";

const ExportIcons = () => {
  return {
    notifications: {
      on: String(notificationsOn),
      off: String(notificationsOff),
    },
    signal: {
      on: String(signalOn),
      off: String(signalOff),
    },
    settings: settings,
    darkTheme: {
      on: String(darkThemeOn),
      off: String(darkThemeOff),
    },
  };
};

export default ExportIcons();
