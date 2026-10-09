import PropTypes from "prop-types";
import "./Light.css";

const Light = ({ tlColor = "red", isActive = false }) => {
  return (
    <div
      className={`light ${isActive ? "light--active" : ""}`}
      style={{ "--light-color": tlColor }}
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Light;