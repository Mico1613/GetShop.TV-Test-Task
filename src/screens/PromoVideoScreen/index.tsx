import React from "react";
import video from "../../assets/video.mp4";
type Props = {};

function PromoVideoScreen({}: Props) {
  return (
    <video autoPlay loop muted width="1280px" height="720px">
      <source src={video} type="video/mp4" />
      KEK
    </video>
  );
}

export default PromoVideoScreen;
