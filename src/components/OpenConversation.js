import React, { useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";
import sendImage from "../images/send-image.png";
import marked from "marked";

export default function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    if (text !== "") {
      const sanitizedText = marked(text);
      sendMessage(
        selectedConversation.recipients.map((r) => r.id),
        sanitizedText
      );
      setText("");
    } else {
      alert("Textarea Not Filled Yet :(");
    }
  }

  return (
    <div
      className="d-flex flex-column overflow-hidden flex-grow-1"
      style={{ marginTop: 38 }}
    >
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe
                    ? "align-self-end align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`px-2 py-1 message-html rounded-0 ${
                    message.fromMe
                      ? "bg-white border me"
                      : "bg-primary text-white other"
                  }`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                ></div>
                <div className={`small ${message.fromMe ? "text-right" : ""}`}>
                  {message.fromMe ? "You" : message.senderName} -{" "}
                  {message.time
                    ? message.time[0] === new Date().toLocaleDateString()
                      ? message.time[1]
                      : `${message.time[0]} - ${message.time[1]}`
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              className="rounded-0"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
              rows
            />
            <InputGroup.Append>
              <Button
                type="submit"
                className="rounded-0"
                style={{ height: 75, display: "flex", alignItems: "center" }}
              >
                <img
                  className="p-4"
                  alt="send-message-pic"
                  style={{ height: "75px" }}
                  src={sendImage}
                />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
