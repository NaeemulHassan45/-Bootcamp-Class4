import { useState } from "react";
import "./Room.css";

function Room() {
  const [isLit, setLit] = useState(false);
  const [isPressed, setPressed] = useState(false);
  function pressButton() {
    setPressed(!isPressed);
    setLit(!isLit);
  }
  return (
    <div className={`room-${isLit ? "on" : "off"}`}>
      <h1 className={`text-${isLit ? "on" : "off"}`}>
        The Light is {isLit ? "On" : "Off"}
      </h1>
      <button
        className={`button-${isLit ? "on" : "off"}`}
        onClick={pressButton}
      >
        {isPressed ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Room;
