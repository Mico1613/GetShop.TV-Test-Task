import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import NumbersPanelStyles from "./NumbersPanel.module.scss";
import { keyHandler } from "../../utils/keyHandler";
type Props = {
  setNumbersFieldValue: Dispatch<SetStateAction<string>>;
  numbersFieldValue: string;
};

function NumbersPanel({ numbersFieldValue, setNumbersFieldValue }: Props) {
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

  const [currentFocus, setCurrentFocus] = useState<number | null>();
  const [wrapperFocus, setWrapperFocus] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const blurHandler = (e: MouseEvent) => {
    const path = e.composedPath();
    if (wrapperRef.current && !path.includes(wrapperRef.current)) {
      setCurrentFocus(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", blurHandler);
    return () => {
      document.removeEventListener("click", blurHandler);
    };
  }, []);

  useEffect(() => {
    if (!currentFocus && wrapperFocus) {
      setCurrentFocus(1);
      setWrapperFocus(false);
    }
  }, [wrapperFocus]);

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


  return (
    <div
      className={NumbersPanelStyles.numbersPanel}
      ref={wrapperRef}
      tabIndex={0}
      onFocus={() => {
        setWrapperFocus(true);
        btnRef.current && btnRef.current.focus();
      }}
    >
      {buttons.map((button, index, buttons) => {
        return (
          <button
            ref={btnRef}
            key={`${button}_${index}`}
            className={`${button.class} ${
              currentFocus === button.id && NumbersPanelStyles.active
            }`}
            onKeyDown={(e) => {
              keyHandler(
                e,
                currentFocus,
                setCurrentFocus,
                numbersFieldValue,
                setNumbersFieldValue,
                buttons
              );
            }}
            onClick={() => clickHandler(button.id, button.value)}
            onFocus={(e) => {
              e.stopPropagation();
            }}
            onBlur={(e) => {
              e.stopPropagation();
              setCurrentFocus(null);
            }}
            tabIndex={-1}
          >
            {button.value}
          </button>
        );
      })}
    </div>
  );
}

export default NumbersPanel;
