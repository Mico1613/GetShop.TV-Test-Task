import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import "./InputNumbersField.module.scss";
type Props = {};

function InputNumbersField({}: Props) {
  const [inputValue, setInputValue] = useState<string>("+7(___)___-__-__");
  console.log(inputValue);

  return (
    <IMaskInput
      mask={"+{7}(000)000-00-00"}
      value={inputValue}
      unmask={false}
      lazy={false}
    />
  );
}

export default InputNumbersField;
