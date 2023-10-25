import { Spin } from "antd";

const LoadingComponent = ({ size = "large" }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(255,255,255,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
        }}
      >
        <Spin size={size} />
      </div>
    </>
  );
};

export default LoadingComponent;
