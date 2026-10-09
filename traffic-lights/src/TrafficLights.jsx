import PropTypes from "prop-types";
import { useState } from "react";
import Light from "./Light";
import "./TrafficLights.css";

const TrafficLights = ({ orientation = "vertical" }) => {
  const [trafficState, setTrafficState] = useState({
    currentSignal: "red",
    counters: {
      red: 1,
      yellow: 0,
      green: 0,
    },
  });

  const handleSelect = (color) => {
    setTrafficState((previous) => {
      const isSameSignal = previous.currentSignal === color;

      return {
        currentSignal: color,
        counters: {
          ...previous.counters,
          [color]: isSameSignal ? previous.counters[color] : previous.counters[color] + 1,
        },
      };
    });
  };

  return (
    <div>
      <div className={`traffic-lights traffic-lights--${orientation}`}>
        <Light
          tlColor="red"
          isActive={trafficState.currentSignal === "red"}
          onSelect={handleSelect}
        />
        <Light
          tlColor="yellow"
          isActive={trafficState.currentSignal === "yellow"}
          onSelect={handleSelect}
        />
        <Light
          tlColor="green"
          isActive={trafficState.currentSignal === "green"}
          onSelect={handleSelect}
        />
      </div>

      <div className="traffic-lights__counters">
        <div>red: {trafficState.counters.red}</div>
        <div>yellow: {trafficState.counters.yellow}</div>
        <div>green: {trafficState.counters.green}</div>
      </div>
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;