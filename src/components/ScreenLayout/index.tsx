import React from "react";
import ScreenLayoutStyles from "./ScreenLayout.module.scss";
import qr from "../../assets/qr.png";
import closeBtn from "../../assets/closeBtn.png";
type Props = {
  children?: React.ReactChild;
  switchToFirstScreen: () => void;
};

function ScreenLayout({ children, switchToFirstScreen }: Props) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div className={ScreenLayoutStyles.flex}>
      <div className={ScreenLayoutStyles.contentSide}>{children}</div>
      <div className={ScreenLayoutStyles.background}>
        <div
          className={`${ScreenLayoutStyles.closeBtnWrapper} ${
            focused && ScreenLayoutStyles.focused
          }`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <button onClick={switchToFirstScreen}>
            <img width="88px" height="52px" src={closeBtn} alt="Закрыть" />
          </button>
        </div>
        <div className={ScreenLayoutStyles.footerInfo}>
          <p className={ScreenLayoutStyles.text}>
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

export default ScreenLayout;
