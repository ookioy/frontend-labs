import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import "./TrafficLights.css";

const CYCLE = ["red", "yellow", "green", "yellow"];
const MANUAL_PHASE = { red: 0, yellow: 1, green: 2 };
const PHASE_FACTOR = { red: 3, yellow: 1, green: 2 };
const BASE_DURATIONS_MS = [500, 1000, 1500, 2000];

const TrafficLights = () => {
  const [orientation, setOrientation] = useState("vertical");
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [baseDuration, setBaseDuration] = useState(1000);
  const [trafficState, setTrafficState] = useState({
    phaseIndex: 0,
    counters: {
      red: 0,
      yellow: 0,
      green: 0,
    },
  });

  const { phaseIndex } = trafficState;

  useEffect(() => {
    if (!isAutomatic) return;

    const timeoutId = setTimeout(() => {
      setTrafficState((previous) => ({
        ...previous,
        phaseIndex: (previous.phaseIndex + 1) % CYCLE.length,
      }));
    }, PHASE_FACTOR[CYCLE[phaseIndex]] * baseDuration);

    return () => clearTimeout(timeoutId);
  }, [isAutomatic, phaseIndex, baseDuration]);

  const handleSelect = (color) => {
    setTrafficState((previous) => ({
      phaseIndex: MANUAL_PHASE[color],
      counters: {
        ...previous.counters,
        [color]: previous.counters[color] + 1,
      },
    }));
  };

  const handleBaseDurationChange = (value) => setBaseDuration(Number(value));

  const handleStart = () => setIsAutomatic(true);
  const handleStop = () => setIsAutomatic(false);

  const handleToggleOrientation = () => {
    setOrientation((previous) =>
      previous === "vertical" ? "horizontal" : "vertical"
    );
  };

  const currentSignal = CYCLE[phaseIndex];
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
          disabled={isAutomatic}
          onSelect={handleSelect}
        />
        <Light
          tlColor="yellow"
          isActive={currentSignal === "yellow"}
          disabled={isAutomatic}
          onSelect={handleSelect}
        />
        <Light
          tlColor="green"
          isActive={currentSignal === "green"}
          disabled={isAutomatic}
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
        baseDuration={baseDuration}
        baseDurations={BASE_DURATIONS_MS}
        onBaseDurationChange={handleBaseDurationChange}
        onStart={handleStart}
        onStop={handleStop}
        onToggleOrientation={handleToggleOrientation}
      />
    </div>
  );
};

TrafficLights.propTypes = {};

export default TrafficLights;