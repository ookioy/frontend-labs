import PropTypes from "prop-types";
import "./Light.css";

const Light = ({
  tlColor = "red",
  isActive = false,
  disabled = false,
  onSelect,
}) => {
  return (
    <button
      type="button"
      className={`light ${isActive ? "light--active" : ""}`}
      style={{ "--light-color": tlColor }}
      disabled={disabled}
      onClick={() => onSelect(tlColor)}
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Light;