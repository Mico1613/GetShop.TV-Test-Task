import React from "react";
import BannerStyles from "./Banner.module.scss";
import qr from "../../assets/qr.png";
type Props = {};

function Banner({}: Props) {
  return (
    <div className={BannerStyles.banner}>
      <div className={BannerStyles.flex}>
        <p className={BannerStyles.suptext}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ ВАН ДАММА!
        </p>
        <div className={BannerStyles.imageWrapper}>
          <img src={qr} alt="#" width="125px" height="125px" />
        </div>
        <p className={BannerStyles.subtext}>Сканируйте QR-код или нажмите ОК</p>
        <button>ОК</button>
      </div>
    </div>
  );
}

export default Banner;
