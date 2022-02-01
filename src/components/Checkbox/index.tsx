import React from "react";
import CheckboxStyles from "./Checkbox.module.scss";
import check from "../../assets/check.png";
type Props = {};

function Checkbox({}: Props) {
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <label htmlFor="checkbox" className={CheckboxStyles.checkboxWrapper}>
      <input className={CheckboxStyles.hidden} type="checkbox" id="checkbox" />
      <span className={CheckboxStyles.checkboxEl}>
        <img src={check} alt="галочка" />
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
