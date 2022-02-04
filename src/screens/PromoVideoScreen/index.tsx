import Banner from "../../components/Banner";

type Props = {
  switchToSecondScreen: () => void;
  video?: string;
};

function PromoVideoScreen({ switchToSecondScreen, video }: Props) {
  return (
    <div>
      <Banner switchToSecondScreen={switchToSecondScreen} />
      <video autoPlay loop muted width="1280px" height="720px">
        <source src={video} type="video/mp4" />
        This browser does not support video playback.
      </video>
    </div>
  );
}

export default PromoVideoScreen;
