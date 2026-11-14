import PropTypes from "prop-types";
import "./StatsBar.css";

const StatsBar = ({
  red,
  yellow,
  green,
  currentSignal,
  total,
  orientation,
  orientationLabel,
  isAutomatic,
  baseDuration,
  baseDurations,
  onBaseDurationChange,
  onStart,
  onStop,
  onToggleOrientation,
}) => {
  return (
    <div className="stats-bar">
      <div>red: {red}</div>
      <div>yellow: {yellow}</div>
      <div>green: {green}</div>
      <div>total clicks: {total}</div>
      <div>current: {currentSignal}</div>
      <div>orientation: {orientationLabel}</div>
      <div>mode: {isAutomatic ? "auto" : "manual"}</div>
      <label>
        base:{" "}
        <select
          value={baseDuration}
          onChange={(event) => onBaseDurationChange(event.target.value)}
        >
          {baseDurations.map((value) => (
            <option key={value} value={value}>
              {value / 1000} s
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        className="stats-bar__toggle"
        onClick={onStart}
        disabled={isAutomatic}
      >
        Запустити
      </button>
      <button
        type="button"
        className="stats-bar__toggle"
        onClick={onStop}
        disabled={!isAutomatic}
      >
        Зупинити
      </button>
      <button
        type="button"
        className="stats-bar__toggle"
        onClick={onToggleOrientation}
      >
        layout: {orientation}
      </button>
    </div>
  );
};

StatsBar.propTypes = {
  red: PropTypes.number.isRequired,
  yellow: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  currentSignal: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
  orientationLabel: PropTypes.string.isRequired,
  isAutomatic: PropTypes.bool.isRequired,
  baseDuration: PropTypes.number.isRequired,
  baseDurations: PropTypes.arrayOf(PropTypes.number).isRequired,
  onBaseDurationChange: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onToggleOrientation: PropTypes.func.isRequired,
};

export default StatsBar;