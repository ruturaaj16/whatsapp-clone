import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";
import Settings from "./Settings";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";
const SETTINGS_KEY = "settings";

export default function Sidebar({ id, responsive }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;
  const settingsOpen = activeKey === SETTINGS_KEY;
  const [navbar, setNavbar] = useState(false);
  const { conversations, selectConversationIndex } = useConversations();

  function closeModal() {
    setModalOpen(false);
  }

  function closeLogoutModal() {
    setLogoutModalOpen(false);
  }

  return responsive ? (
    <>
      <div className={`responsive-btn`} style={{ position: "absolute" }}>
        <button
          onClick={() => {
            setNavbar(true);
          }}
          className="btn btn-secondary rounded-0"
        >
          &#9776;
        </button>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: 10000,
          backgroundColour: "#fff",
          transition: ".5s all ease-in-out",
        }}
        className={`flex-column ${
          navbar
            ? "position-absolute d-flex"
            : "position-absolute d-flex transform-100"
        }`}
      >
        <Tab.Container
          className="bg-white"
          activeKey={activeKey}
          onSelect={setActiveKey}
        >
          <Nav
            variant="tabs"
            style={{ maxHeight: 40 }}
            className="justify-content-center d-flex overflow-auto flex-column bg-white"
          >
            <Nav.Item className="rounded-0 text-center">
              <Nav.Link className="rounded-0" eventKey={CONVERSATIONS_KEY}>
                Conversations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="rounded-0 text-center">
              <Nav.Link className="rounded-0" eventKey={CONTACTS_KEY}>
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="rounded-0 text-center">
              <Nav.Link className="rounded-0" eventKey={SETTINGS_KEY}>
                Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center rounded-0">
              <Nav.Link
                onClick={() => {
                  setNavbar(false);
                }}
              >
                &times;
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="border-right bg-white overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <ListGroup variant="flush">
                {conversations.map((conversation, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => {
                      selectConversationIndex(index);
                      setNavbar(false);
                    }}
                    active={conversation.selected}
                    className="conversation"
                  >
                    {conversation.recipients.map((r) => r.name).join(", ")}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
            <Tab.Pane eventKey={SETTINGS_KEY}>
              <Settings />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 bg-white border-top border-right d-flex justify-content-center flex-column align-items-center text-center small">
            <span>
              Your Id: <span className="text-muted">{id}</span>
            </span>
            <button
              onClick={() => {
                var copyText = id;
                navigator.clipboard.writeText(copyText);
                alert("Copied Your Id Successfully");
              }}
              className="btn btn-sm mx-4 btn-primary rounded-0"
            >
              Copy
            </button>
          </div>
          <Button
            onClick={() => {
              setModalOpen(true);
              setNavbar(false);
            }}
            className="rounded-0 button-dark"
          >
            New {conversationsOpen ? "Conversation" : "Contact"}
          </Button>
          <Button
            onClick={() => {
              setLogoutModalOpen(true);
              setNavbar(false);
            }}
            className="rounded-0 btn btn-danger"
          >
            Logout
          </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
        <Modal show={logoutModalOpen} onHide={closeLogoutModal}>
          <Modal.Header closeButton className="text-danger">
            <h5>Logging Out Will Delete All Your Data!!!</h5>
          </Modal.Header>
          <Modal.Body>
            <Button
              variant="danger"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Continue
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  ) : (
    <div style={{ height: "100vh" }} className="d-flex navbar-main flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav
          variant="tabs"
          style={{ maxHeight: 40 }}
          className="d-flex flex-column overflow-auto justify-content-center"
        >
          <Nav.Item className="rounded-0">
            <Nav.Link className="rounded-0" eventKey={CONVERSATIONS_KEY}>
              Conversations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="rounded-0">
            <Nav.Link className="rounded-0" eventKey={CONTACTS_KEY}>
              Contacts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="rounded-0">
            <Nav.Link className="rounded-0" eventKey={SETTINGS_KEY}>
              Settings
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <ListGroup variant="flush">
              {conversations.map((conversation, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => {
                    selectConversationIndex(index);
                  }}
                  active={conversation.selected}
                  className="conversation"
                >
                  {conversation.recipients.map((r) => r.name).join(", ")}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
          <Tab.Pane eventKey={SETTINGS_KEY}>
            <Settings />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 bg-white border-top border-right d-flex flex-column align-items-center text-center small">
          <span>
            Your Id: <span className="text-muted">{id}</span>
          </span>
          <button
            onClick={() => {
              var copyText = id;
              navigator.clipboard.writeText(copyText);
              alert("Copied Your Id Successfully");
            }}
            className="btn btn-sm mx-4 mt-2 btn-primary rounded-0"
          >
            Copy
          </button>
        </div>

        {conversationsOpen ? (
          <Button
            onClick={() => setModalOpen(true)}
            className="rounded-0 button-dark"
          >
            New Conversation
          </Button>
        ) : settingsOpen ? null : (
          <Button
            onClick={() => setModalOpen(true)}
            className="rounded-0 button-dark"
          >
            New Contact
          </Button>
        )}

        <Button
          onClick={() => setLogoutModalOpen(true)}
          className="rounded-0 btn btn-danger"
        >
          Logout
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
      <Modal show={logoutModalOpen} onHide={closeLogoutModal}>
        <Modal.Header closeButton className="text-danger">
          <h5>Logging Out Will Delete All Your Data!!!</h5>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="danger"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
