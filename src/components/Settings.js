import React, { useState, useMemo } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import ExportIcons from "./ExportIcons";

function Settings() {
  const [modal, setModal] = useState(["Settings", false]);
  let notifications = eval(window.localStorage.getItem("notifications"));

  const settings = useMemo(() => {
    return [
      {
        key: "Notifications",
        status: {
          off: "Off",
          on: "On",
        },
        icons: {
          off: ExportIcons.notifications.off,
          on: ExportIcons.notifications.on,
        },
        default: {
          status: notifications ? "On" : "Off",
          icon: notifications
            ? ExportIcons.notifications.on
            : ExportIcons.notifications.off,
        },
      },
      {
        key: "Signal",
        status: {
          off: "Some P",
          on: "No problems yet",
        },
        icons: {
          off: ExportIcons.signal.off,
          on: ExportIcons.signal.on,
        },
        default: {
          status: navigator.onLine
            ? "No problems yet"
            : "Some problems detected. Try to open your console and view it...",
          icon: navigator.onLine
            ? ExportIcons.signal.on
            : ExportIcons.signal.off,
        },
      },
      {
        key: "Theme",
        status: {
          off: "Light",
          on: "Dark",
        },
        icons: {
          off: ExportIcons.darkTheme.off,
          on: ExportIcons.darkTheme.on,
        },
        default: {
          status: "Light",
          icon: ExportIcons.darkTheme.off,
        },
      },
    ];
  }, [notifications]);

  const toggleNotifications = () => {
    if (window.localStorage.getItem("notifications") !== null) {
      notifications = !eval(window.localStorage.getItem("notifications"));
      window.localStorage.setItem(
        "notifications",
        !eval(window.localStorage.getItem("notifications"))
      );

      window.location.reload();

      return (
        <h5 className="text-left">
          Notifications are{" "}
          {eval(window.localStorage.getItem("notifications")) ? "On" : "Off"}
        </h5>
      );
    } else {
      window.localStorage.setItem("notifications", true);
      window.location.reload();
      return <h5 className="text-left">Notifications are On</h5>;
    }
  };

  function updateSignal() {
    settings[1].default = {
      status: navigator.onLine
        ? "No problems yet"
        : "Some problems detected. Try to open your console and view it...",
      icon: navigator.onLine ? ExportIcons.signal.on : ExportIcons.signal.off,
    };
    if (navigator.onLine) {
      return true;
    } else {
      return false;
    }
  }

  function openModal(which, open) {
    setModal([which, open]);
  }
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-left align-items-center">
          <img
            style={{ height: 20, width: 20 }}
            src={ExportIcons.settings}
            alt="settings-icon"
          />
          &nbsp;&nbsp;Settings
        </ListGroup.Item>
        {settings.map((setting) => {
          return (
            <ListGroup.Item
              key={setting.key}
              style={{ cursor: "pointer" }}
              onClick={() => openModal(setting.key.toLowerCase(), true)}
              className="d-flex justify-content-left align-items-center"
            >
              <img
                style={{ height: 20, width: 20 }}
                src={setting.default.icon}
                alt="settings-icon"
              />
              &nbsp;&nbsp;{setting.key}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Modal
        style={{ zIndex: 1000000000000000 }}
        show={modal[1]}
        backdrop="static"
        keyboard={false}
        onHide={() => setModal(["Settings", false])}
      >
        <Modal.Header closeButton>
          <h5>
            {modal[0] === "signal" ? `Checking Signal Status...` : null}
            {modal[0] === "notifications"
              ? `Checking Notifications Status & Reloading...`
              : null}
            {modal[0] === "theme" ? `Not Yet Working` : null}
          </h5>
        </Modal.Header>
        <Modal.Body>
          {modal[0] === "signal" ? (
            updateSignal() ? (
              <h5 className="text-success">Signal Status - Signal Proper</h5>
            ) : (
              <h5 className="text-danger">
                Signal Status - Server Unreachable
              </h5>
            )
          ) : null}
          {modal[0] === "notifications" ? toggleNotifications() : null}
          {modal[0] === "theme" ? (
            <p>
              Please wait for a few days until this setting comes into force :)
            </p>
          ) : null}

          <Button
            variant="primary"
            onClick={() => setModal(["Settings", false])}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Settings;
