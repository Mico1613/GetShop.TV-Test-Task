import React from "react";
import InfoScreenStyles from "./InfoScreen.module.scss";
import qr from "../../assets/qr.png";
import closeBtn from "../../assets/closeBtnBlack.png";
type Props = {};

function InfoScreen({}: Props) {
  return (
    <div className={InfoScreenStyles.flex}>
      <div className={InfoScreenStyles.info}>
        <h1 className={InfoScreenStyles.header}>
          Заявка
          <br /> принята
        </h1>
        <p className={InfoScreenStyles.text}>
          Держите телефон под рукой.
          <br /> Скоро с Вами свяжется наш менеджер.
        </p>
      </div>
      <div className={InfoScreenStyles.background}>
        <div className={InfoScreenStyles.closeBtnWrapper}>
          <button>
            <img width="88px" height="52px" src={closeBtn} alt="Закрыть" />
          </button>
        </div>
        <div className={InfoScreenStyles.footerInfo}>
          <p className={InfoScreenStyles.text}>
            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <img
            src={qr}
            width="110px"
            height="110px"
            alt="Картинка с qr-кодом"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
