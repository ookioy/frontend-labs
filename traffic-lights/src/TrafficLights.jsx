import PropTypes from "prop-types";
import Light from "./Light";

const TrafficLights = ({ orientation = "vertical" }) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        width: isHorizontal ? "220px" : "150px",
        height: isHorizontal ? "150px" : "220px",
        padding: isHorizontal ? "15px" : "20px 10px",
        backgroundColor: "#1f2937",
        margin: "40px auto",
      }}
    >
      <Light tlColor="red" isActive />
      <Light tlColor="yellow" />
      <Light tlColor="green" />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;