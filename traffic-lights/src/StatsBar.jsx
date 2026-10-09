import PropTypes from "prop-types";
import "./StatsBar.css";

const StatsBar = ({ red, yellow, green, currentSignal, total }) => {
  return (
    <div className="stats-bar">
      <div>red: {red}</div>
      <div>yellow: {yellow}</div>
      <div>green: {green}</div>
      <div>total: {total}</div>
      <div>current: {currentSignal}</div>
    </div>
  );
};

StatsBar.propTypes = {
  red: PropTypes.number.isRequired,
  yellow: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  currentSignal: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default StatsBar;
