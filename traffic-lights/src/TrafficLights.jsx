import PropTypes from "prop-types";
import Light from "./Light"; 

const TrafficLights = () => {
  return (
    <div
      style={{
        width: "150px",
        backgroundColor: "black",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "40px auto",
      }}
    >
      <Light tlColor="red" isActive />
      <Light tlColor="yellow" />
      <Light tlColor="green" />
    </div>
  );
};

export default TrafficLights;