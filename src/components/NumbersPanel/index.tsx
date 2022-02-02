import React, { Dispatch, SetStateAction } from "react";
import NumbersPanelStyles from "./NumbersPanel.module.scss";
import {
  RovingTabIndexProvider,
  useRovingTabIndex,
  useFocusEffect,
} from "react-roving-tabindex";

type Props = {
  setNumbersFieldValue: Dispatch<SetStateAction<string>>;
  numbersFieldValue: string;
};

function NumbersPanel({ numbersFieldValue, setNumbersFieldValue }: Props) {
  const [choosen, setchoosen] = React.useState<number>();
  const [disabled, setdisabled] = React.useState(false);
  const ref = React.useRef<null | HTMLButtonElement>(null);

  const buttons = [
    { id: 1, value: "1", class: `${NumbersPanelStyles.elements}` },
    { id: 2, value: "2", class: `${NumbersPanelStyles.elements}` },
    { id: 3, value: "3", class: `${NumbersPanelStyles.elements}` },
    { id: 4, value: "4", class: `${NumbersPanelStyles.elements}` },
    { id: 5, value: "5", class: `${NumbersPanelStyles.elements}` },
    { id: 6, value: "6", class: `${NumbersPanelStyles.elements}` },
    { id: 7, value: "7", class: `${NumbersPanelStyles.elements}` },
    { id: 8, value: "8", class: `${NumbersPanelStyles.elements}` },
    { id: 9, value: "9", class: `${NumbersPanelStyles.elements}` },
    {
      id: 10,
      value: "Стереть",
      class: `${NumbersPanelStyles.elements} ${NumbersPanelStyles.resetEl}`,
    },
    { id: 0, value: "0", class: `${NumbersPanelStyles.elements}` },
  ];

  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(
    ref,
    disabled
  );

  useFocusEffect(focused, ref);

  const clickHandler = (id: number, value: string) => {
    setchoosen(id);
    if (value !== "Стереть" && numbersFieldValue.length <= 10) {
      setNumbersFieldValue(numbersFieldValue + value);
    } else if (value === "Стереть") {
      setNumbersFieldValue(
        numbersFieldValue.substring(0, numbersFieldValue.length - 1)
      );
    }
  };
  const keyHandler = (e: any, ref: any, id: number) => {
    console.log(e);
    setchoosen(id);
  };

  return (
    <RovingTabIndexProvider>
      <div className={NumbersPanelStyles.numbersPanel}>
        {buttons.map((button, index) => {
          return (
            <button
              key={`${button}_${index}`}
              className={`${button.class} ${
                choosen === button.id && NumbersPanelStyles.active
              }`}
              ref={ref}
              onKeyDown={(e) => {
                handleKeyDown(e);
                keyHandler(e, ref, button.id);
              }}
              onClick={() => clickHandler(button.id, button.value)}
            >
              {button.value}
            </button>
          );
        })}
      </div>
    </RovingTabIndexProvider>
  );
}

export default NumbersPanel;
