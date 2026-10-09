import PropTypes from "prop-types";
import { useState } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import "./TrafficLights.css";

const TrafficLights = () => {
  const [orientation, setOrientation] = useState("vertical");
  const [trafficState, setTrafficState] = useState({
    currentSignal: "red",
    counters: {
      red: 0,
      yellow: 0,
      green: 0,
    },
  });

  const handleSelect = (color) => {
    setTrafficState((previous) => ({
      currentSignal: color,
      counters: {
        ...previous.counters,
        [color]: previous.counters[color] + 1,
      },
    }));
  };

  const handleToggleOrientation = () => {
    setOrientation((previous) =>
      previous === "vertical" ? "horizontal" : "vertical"
    );
  };

  const totalClicks =
    trafficState.counters.red +
    trafficState.counters.yellow +
    trafficState.counters.green;
  const orientationLabel =
    orientation === "vertical" ? "Вертикальна" : "Горизонтальна";

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
        total={totalClicks}
        orientation={orientation}
        orientationLabel={orientationLabel}
        onToggleOrientation={handleToggleOrientation}
      />
    </div>
  );
};

TrafficLights.propTypes = {};

export default TrafficLights;