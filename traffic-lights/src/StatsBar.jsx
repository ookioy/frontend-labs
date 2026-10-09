import PropTypes from "prop-types";
import "./StatsBar.css";

const StatsBar = ({
  red,
  yellow,
  green,
  currentSignal,
  total,
  orientation,
  onToggleOrientation,
}) => {
  return (
    <div className="stats-bar">
      <div>red: {red}</div>
      <div>yellow: {yellow}</div>
      <div>green: {green}</div>
      <div>total: {total}</div>
      <div>current: {currentSignal}</div>
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
  onToggleOrientation: PropTypes.func.isRequired,
};

export default StatsBar;
