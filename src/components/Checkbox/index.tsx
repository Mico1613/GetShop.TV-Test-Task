import React, { Dispatch, SetStateAction } from "react";
import CheckboxStyles from "./Checkbox.module.scss";
import check from "../../assets/check.png";
type Props = {
  checkboxState: boolean;
  setCheckboxState: Dispatch<SetStateAction<boolean>>;
};

function Checkbox({ checkboxState, setCheckboxState }: Props) {
  return (
    <label htmlFor="checkbox" className={CheckboxStyles.checkboxWrapper}>
      <input className={CheckboxStyles.hidden} type="checkbox" id="checkbox" />
      <span
        className={CheckboxStyles.checkboxEl}
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
        <br />
        персональных данных
      </p>
    </label>
  );
}

export default Checkbox;
