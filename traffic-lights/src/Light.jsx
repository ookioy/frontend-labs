import PropTypes from "prop-types";
import "./Light.css";

const Light = ({ tlColor = "red", isActive = false, onSelect }) => {
  return (
    <button
      type="button"
      className={`light ${isActive ? "light--active" : ""}`}
      style={{ "--light-color": tlColor }}
      onClick={() => onSelect(tlColor)}
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Light;