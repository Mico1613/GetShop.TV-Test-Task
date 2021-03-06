import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import InputNumbersField from "../../components/InputNumbersField";
import NumbersPanel from "../../components/NumbersPanel";
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
  const [btnFocus, setBtnFocus] = useState(false);
  const [numbersFieldValue, setNumbersFieldValue] = useState("7");
  const [checkboxState, setCheckboxState] = useState(false);
  
  const btnClasses = () => {
    return `${InputNumberScreenStyles.confirmBtn} ${
      numbersFieldValue.length === 11 &&
      checkboxState &&
      InputNumberScreenStyles.active
    } ${btnFocus && InputNumberScreenStyles.focused}`;
  };

  return (
    <ScreenLayout switchToFirstScreen={switchToFirstScreen}>
      <>
        <h1 className={InputNumberScreenStyles.suptext}>
          Введите ваш номер мобильного телефона
        </h1>
        <div className={InputNumberScreenStyles.inputWrapper}>
          <InputNumbersField
            setNumbersFieldValue={setNumbersFieldValue}
            numbersFieldValue={numbersFieldValue}
          />
        </div>
        <h2 className={InputNumberScreenStyles.subtext}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </h2>
        <NumbersPanel
          setNumbersFieldValue={setNumbersFieldValue}
          numbersFieldValue={numbersFieldValue}
        />
        <Checkbox
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
        />
        <button
          className={btnClasses()}
          onClick={() => {
            if (checkboxState && numbersFieldValue.length === 11) {
              switchToThirdScreen();
            }
          }}
          onFocus={() => setBtnFocus(true)}
          onBlur={() => setBtnFocus(false)}
        >
          подтвердить номер
        </button>
      </>
    </ScreenLayout>
  );
}

export default InputNumberScreen;
