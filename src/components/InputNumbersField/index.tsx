import React, { Dispatch, SetStateAction, useState } from "react";
import { IMaskInput } from "react-imask";
import "./InputNumbersField.module.scss";
type Props = {
  setNumbersFieldValue: Dispatch<SetStateAction<string>>;
  numbersFieldValue: string;
};

function InputNumbersField({ numbersFieldValue, setNumbersFieldValue }: Props) {

  return (
    <IMaskInput
      mask={"+{7}(000)000-00-00"}
      value={numbersFieldValue}
      unmask={true}
      lazy={false}
      onAccept={(value) => setNumbersFieldValue(value)}
    />
  );
}

export default InputNumbersField;
