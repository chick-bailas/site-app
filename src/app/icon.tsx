import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 150,
        }}
      >
        CB
      </div>
    ),
    { ...size }
  );
};

export default Icon;
