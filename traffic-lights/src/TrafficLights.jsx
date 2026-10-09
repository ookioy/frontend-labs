import PropTypes from "prop-types";
import { useState } from "react";
import Light from "./Light";
import "./TrafficLights.css";

const TrafficLights = ({ orientation = "vertical" }) => {
  const [currentSignal, setCurrentSignal] = useState("red");

  const handleSelect = (color) => {
    setCurrentSignal(color);
  };

  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      <Light tlColor="red" isActive={currentSignal === "red"} onSelect={handleSelect} />
      <Light tlColor="yellow" isActive={currentSignal === "yellow"} onSelect={handleSelect} />
      <Light tlColor="green" isActive={currentSignal === "green"} onSelect={handleSelect} />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;