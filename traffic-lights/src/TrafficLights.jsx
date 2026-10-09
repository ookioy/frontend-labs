import PropTypes from "prop-types";
import Light from "./Light";
import "./TrafficLights.css";

const TrafficLights = ({ orientation = "vertical" }) => {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      <Light tlColor="red" isActive={true} />
      <Light tlColor="yellow" />
      <Light tlColor="green" />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;