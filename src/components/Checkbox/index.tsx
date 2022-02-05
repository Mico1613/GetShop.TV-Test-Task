import React, { Dispatch, SetStateAction, useState } from "react";
import CheckboxStyles from "./Checkbox.module.scss";
import check from "../../assets/check.png";
type Props = {
  checkboxState: boolean;
  setCheckboxState: Dispatch<SetStateAction<boolean>>;
};

function Checkbox({ checkboxState, setCheckboxState }: Props) {
  const [active, setActive] = useState(false);
  const enterKeyHandler = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter") {
      setCheckboxState(!checkboxState);
    }
  };
  return (
    <label
      htmlFor="checkbox"
      className={CheckboxStyles.checkboxWrapper}
      tabIndex={0}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onKeyDown={(e) => enterKeyHandler(e)}
    >
      <input className={CheckboxStyles.hidden} type="checkbox" id="checkbox" />
      <span
        className={`${CheckboxStyles.checkboxEl} ${
          active && CheckboxStyles.focused
        }`}
        onClick={() => setCheckboxState(!checkboxState)}
      >
        <img
          src={check}
          alt="галочка"
          className={`${
            !checkboxState ? CheckboxStyles.hidden : CheckboxStyles.visible
          }`}
        />
      </span>
      <p className={CheckboxStyles.checkboxText}>
        Согласие на обработку
        <br/>
        персональных данных
      </p>
    </label>
  );
}

export default Checkbox;
