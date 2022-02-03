import React, { Dispatch, KeyboardEvent, SetStateAction } from "react";
import NumbersPanelStyles from "./NumbersPanel.module.scss";
type Props = {
  setNumbersFieldValue: Dispatch<SetStateAction<string>>;
  numbersFieldValue: string;
};

function NumbersPanel({ numbersFieldValue, setNumbersFieldValue }: Props) {
  const ref = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  const [currentFocus, setCurrentFocus] = React.useState<number | null>(1);

  const buttons = [
    {
      id: 1,
      value: "1",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 2,
      value: "2",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 3,
      value: "3",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 4,
      value: "4",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 5,
      value: "5",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 6,
      value: "6",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 7,
      value: "7",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 8,
      value: "8",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 9,
      value: "9",
      class: `${NumbersPanelStyles.elements}`,
    },
    {
      id: 10,
      value: "Стереть",
      class: `${NumbersPanelStyles.elements} ${NumbersPanelStyles.resetEl}`,
    },
    {
      id: 11,
      value: "0",
      class: `${NumbersPanelStyles.elements}`,
    },
  ];

  const clickHandler = (id: number, value: string) => {
    setCurrentFocus(id);
    if (value !== "Стереть" && numbersFieldValue.length <= 10) {
      setNumbersFieldValue(numbersFieldValue + value);
    } else if (value === "Стереть") {
      setNumbersFieldValue(
        numbersFieldValue.substring(0, numbersFieldValue.length - 1)
      );
    }
  };

  const keyHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "ArrowUp") {
      switch (currentFocus) {
        case 1:
          setCurrentFocus(10);
          break;
        case 2:
          setCurrentFocus(10);
          break;
        case 3:
          setCurrentFocus(11);
          break;
        case 4:
          setCurrentFocus(1);
          break;
        case 5:
          setCurrentFocus(2);
          break;
        case 6:
          setCurrentFocus(3);
          break;
        case 7:
          setCurrentFocus(4);
          break;
        case 8:
          setCurrentFocus(5);
          break;
        case 9:
          setCurrentFocus(6);
          break;
        case 10:
          setCurrentFocus(7);
          break;
        case 11:
          setCurrentFocus(9);
          break;
        default:
          break;
      }
    }
    if (e.key === "ArrowRight") {
      switch (currentFocus) {
        case 1:
          setCurrentFocus(2);
          break;
        case 2:
          setCurrentFocus(3);
          break;
        case 3:
          setCurrentFocus(4);
          break;
        case 4:
          setCurrentFocus(5);
          break;
        case 5:
          setCurrentFocus(6);
          break;
        case 6:
          setCurrentFocus(7);
          break;
        case 7:
          setCurrentFocus(8);
          break;
        case 8:
          setCurrentFocus(9);
          break;
        case 9:
          setCurrentFocus(10);
          break;
        case 10:
          setCurrentFocus(11);
          break;
        case 11:
          setCurrentFocus(1);
          break;
        default:
          break;
      }
    }
    if (e.key === "ArrowDown") {
      switch (currentFocus) {
        case 1:
          setCurrentFocus(4);
          break;
        case 2:
          setCurrentFocus(5);
          break;
        case 3:
          setCurrentFocus(6);
          break;
        case 4:
          setCurrentFocus(7);
          break;
        case 5:
          setCurrentFocus(8);
          break;
        case 6:
          setCurrentFocus(9);
          break;
        case 7:
          setCurrentFocus(10);
          break;
        case 8:
          setCurrentFocus(10);
          break;
        case 9:
          setCurrentFocus(11);
          break;
        case 10:
          setCurrentFocus(1);
          break;
        case 11:
          setCurrentFocus(3);
          break;
        default:
          break;
      }
    }
    if (e.key === "ArrowLeft") {
      switch (currentFocus) {
        case 1:
          setCurrentFocus(11);
          break;
        case 2:
          setCurrentFocus(1);
          break;
        case 3:
          setCurrentFocus(2);
          break;
        case 4:
          setCurrentFocus(3);
          break;
        case 5:
          setCurrentFocus(4);
          break;
        case 6:
          setCurrentFocus(5);
          break;
        case 7:
          setCurrentFocus(6);
          break;
        case 8:
          setCurrentFocus(7);
          break;
        case 9:
          setCurrentFocus(8);
          break;
        case 10:
          setCurrentFocus(9);
          break;
        case 11:
          setCurrentFocus(10);
          break;
        default:
          break;
      }
    }
    if (e.key === "Enter") {
      buttons.forEach((button) => {
        if (
          button.id === currentFocus &&
          button.id !== 10 &&
          numbersFieldValue.length <= 10
        ) {
          setNumbersFieldValue(numbersFieldValue + button.value);
        } else if (button.id === currentFocus && button.id === 10) {
          setNumbersFieldValue(
            numbersFieldValue.substring(0, numbersFieldValue.length - 1)
          );
        }
      });
    }
    if (e.code.startsWith("Digit")) {
      if (numbersFieldValue.length <= 10) {
        setNumbersFieldValue(numbersFieldValue + parseInt(e.key));
      }
    }
    if (e.key === "Backspace") {
      setNumbersFieldValue(
        numbersFieldValue.substring(0, numbersFieldValue.length - 1)
      );
    }
  };

  return (
    <div className={NumbersPanelStyles.numbersPanel}>
      {buttons.map((button, index, buttons) => {
        return (
          <button
            ref={ref}
            key={`${button}_${index}`}
            className={`${button.class} ${
              currentFocus === button.id && NumbersPanelStyles.active
            }`}
            onKeyDown={(e) => {
              keyHandler(e);
            }}
            onClick={() => clickHandler(button.id, button.value)}
            onBlur={() => setCurrentFocus(null)}
          >
            {button.value}
          </button>
        );
      })}
    </div>
  );
}

export default NumbersPanel;
