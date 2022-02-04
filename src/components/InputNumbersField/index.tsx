import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IMaskInput } from "react-imask";
import InputStyles from "./InputNumbersField.module.scss";
type Props = {
  setNumbersFieldValue: Dispatch<SetStateAction<string>>;
  numbersFieldValue: string;
};

function InputNumbersField({ numbersFieldValue, setNumbersFieldValue }: Props) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null);
  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  return (
    <IMaskInput
      mask={"+{7}(000)000-00-00"}
      value={numbersFieldValue}
      unmask={true}
      lazy={false}
      onAccept={(value) => setNumbersFieldValue(value)}
      tabIndex={0}
      inputRef={(el) => (ref.current = el)}
      onFocus={() => {
        setFocused(true);
        if (ref.current) {
          ref.current.selectionStart = 3;
          ref.current.selectionEnd = 3;
        }
        console.dir(ref.current);
      }}
      onBlur={() => setFocused(false)}
      className={`${focused && InputStyles.focused}`}
    />
  );
}

export default InputNumbersField;
