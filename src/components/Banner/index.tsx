import React, { useEffect, useState } from "react";
import BannerStyles from "./Banner.module.scss";
import qr from "../../assets/qr.png";
type Props = {
  switchToSecondScreen: () => void;
};

function Banner({ switchToSecondScreen }: Props) {
  const [bannerVisibility, setBannerVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBannerVisibility(true);
    }, 5000);
  }, []);

  return (
    <div
      className={`${BannerStyles.banner} ${
        bannerVisibility && BannerStyles.animation
      }`}
    >
      <div className={BannerStyles.flex}>
        <p className={BannerStyles.suptext}>
          Исполните мечту вашего малыша!
          <br />
          Подарите ему Ван Дамма!
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
        <button onClick={switchToSecondScreen} className={BannerStyles.button}>
          ОК
        </button>
      </div>
    </div>
  );
}

export default Banner;
