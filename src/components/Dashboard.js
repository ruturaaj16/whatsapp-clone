import React, { useLayoutEffect, useState } from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../contexts/ConversationsProvider";

function useWindowSize() {
  const [size, setSize] = useState({});
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  const { width } = useWindowSize();

  return width > 550 ? (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar responsive={false} id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  ) : (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar responsive={true} id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
