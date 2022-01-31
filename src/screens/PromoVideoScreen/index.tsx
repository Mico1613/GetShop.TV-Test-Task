import React from "react";

type Props = {};

function PromoVideoScreen({}: Props) {
  return (
    <video
      controls
      width="1280px"
      height="720px"
      src="../../assets/video.mp4"
      autoPlay
    >
      <source src="../../assets/video.mp4" type="video/mp4" />
      KEK
    </video>
  );
}

export default PromoVideoScreen;
