import video from "../../assets/video.mp4";
import Banner from "../../components/Banner";

type Props = {};

function PromoVideoScreen({}: Props) {
  return (
    <div>
      <Banner />
      <video autoPlay loop muted width="1280px" height="720px">
        <source src={video} type="video/mp4" />
        This browser does not support video playback.
      </video>
    </div>
  );
}

export default PromoVideoScreen;
