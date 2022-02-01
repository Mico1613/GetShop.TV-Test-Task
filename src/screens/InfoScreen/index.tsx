import React from "react";
import InfoScreenStyles from "./InfoScreen.module.scss";
import ScreenLayout from "../../components/ScreenLayout";
type Props = {
  switchToFirstScreen: () => void;
};

function InfoScreen({ switchToFirstScreen }: Props) {
  return (
    <ScreenLayout switchToFirstScreen={switchToFirstScreen}>
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
    </ScreenLayout>
  );
}

export default InfoScreen;
