import PropTypes from "prop-types";
import { useState } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import "./TrafficLights.css";

const CYCLE = ["red", "yellow", "green", "yellow"];
const MANUAL_PHASE = { red: 0, yellow: 1, green: 2 };

const TrafficLights = () => {
  const [orientation, setOrientation] = useState("vertical");
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [trafficState, setTrafficState] = useState({
    phaseIndex: 0,
    counters: {
      red: 0,
      yellow: 0,
      green: 0,
    },
  });

  const handleSelect = (color) => {
    setTrafficState((previous) => ({
      phaseIndex: MANUAL_PHASE[color],
      counters: {
        ...previous.counters,
        [color]: previous.counters[color] + 1,
      },
    }));
  };

  const handleStart = () => setIsAutomatic(true);
  const handleStop = () => setIsAutomatic(false);

  const handleToggleOrientation = () => {
    setOrientation((previous) =>
      previous === "vertical" ? "horizontal" : "vertical"
    );
  };

  const currentSignal = CYCLE[trafficState.phaseIndex];
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
          isActive={currentSignal === "red"}
          onSelect={handleSelect}
        />
        <Light
          tlColor="yellow"
          isActive={currentSignal === "yellow"}
          onSelect={handleSelect}
        />
        <Light
          tlColor="green"
          isActive={currentSignal === "green"}
          onSelect={handleSelect}
        />
      </div>

      <StatsBar
        red={trafficState.counters.red}
        yellow={trafficState.counters.yellow}
        green={trafficState.counters.green}
        currentSignal={currentSignal}
        total={totalClicks}
        orientation={orientation}
        orientationLabel={orientationLabel}
        isAutomatic={isAutomatic}
        onStart={handleStart}
        onStop={handleStop}
        onToggleOrientation={handleToggleOrientation}
      />
    </div>
  );
};

TrafficLights.propTypes = {};

export default TrafficLights;