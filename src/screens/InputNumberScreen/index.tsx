import React from "react";
import InputNumbersField from "../../components/InputNumbersField";
import ScreenLayout from "../../components/ScreenLayout";
import InputNumberScreenStyles from "./InputNumberScreen.module.scss";

type Props = {
  switchToFirstScreen: () => void;
  switchToThirdScreen: () => void;
};

function InputNumberScreen({
  switchToFirstScreen,
  switchToThirdScreen,
}: Props) {
  return (
    <ScreenLayout switchToFirstScreen={switchToFirstScreen}>
      <>
        <h1 className={InputNumberScreenStyles.suptext}>
          Введите ваш номер мобильного телефона
        </h1>
        <div className={InputNumberScreenStyles.inputWrapper}>
          <InputNumbersField />
        </div>
        <h2 className={InputNumberScreenStyles.subtext}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </h2>
        <div className={InputNumberScreenStyles.numbersPanel}></div>
        <div className={InputNumberScreenStyles.checkboxWrapper}>
          <input
            className={InputNumberScreenStyles.checkboxEl}
            type="checkbox"
          />
          <p className={InputNumberScreenStyles.checkboxText}>
            Согласие на обработку персональных данных
          </p>
        </div>
        <button className={InputNumberScreenStyles.confirmBtn}>
          подтвердить номер
        </button>
      </>
    </ScreenLayout>
  );
}

export default InputNumberScreen;
