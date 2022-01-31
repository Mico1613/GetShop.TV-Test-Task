import React from "react";
import BannerStyles from "./Banner.module.scss";
import qr from "../../assets/qr.png";
type Props = {};

function Banner({}: Props) {
  const [bannerVisibility, setBannerVisibility] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setBannerVisibility(true);
    }, 4500);
  }, []);

  return (
    <div
      className={`${BannerStyles.banner} ${
        bannerVisibility && BannerStyles.animation
      }`}
    >
      <div className={BannerStyles.flex}>
        <p className={BannerStyles.suptext}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          <br /> ПОДАРИТЕ ЕМУ ВАН ДАММА!
        </p>
        <div className={BannerStyles.imageWrapper}>
          <img
            src={qr}
            alt="Картинка с qr-кодом"
            width="125px"
            height="125px"
          />
        </div>
        <p className={BannerStyles.subtext}>Сканируйте QR-код или нажмите ОК</p>
        <button className={BannerStyles.button}>ОК</button>
      </div>
    </div>
  );
}

export default Banner;
