import PropTypes from "prop-types";
import { useState } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import "./TrafficLights.css";

const TrafficLights = ({ orientation = "vertical" }) => {
  const [trafficState, setTrafficState] = useState({
    currentSignal: "red",
    counters: {
      red: 0,
      yellow: 0,
      green: 0,
    },
  });

  const handleSelect = (color) => {
    setTrafficState((previous) => {
      const isSameSignal = previous.currentSignal === color;

      if (isSameSignal) {
        return previous;
      }

      return {
        currentSignal: color,
        counters: {
          ...previous.counters,
          [color]: previous.counters[color] + 1,
        },
      };
    });
  };

  const total =
    trafficState.counters.red +
    trafficState.counters.yellow +
    trafficState.counters.green;

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

      <StatsBar
        red={trafficState.counters.red}
        yellow={trafficState.counters.yellow}
        green={trafficState.counters.green}
        currentSignal={trafficState.currentSignal}
        total={total}
      />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;