import { Dispatch, KeyboardEvent, SetStateAction } from "react";

interface IButtons {
  id: number;
  value: string;
  class: string;
}

export const keyHandler = (
  e: KeyboardEvent<HTMLButtonElement>,
  currentFocus: number | null | undefined,
  setCurrentFocus: Dispatch<SetStateAction<number | null | undefined>>,
  numbersFieldValue: string,
  setNumbersFieldValue: Dispatch<SetStateAction<string>>,
  buttons: IButtons[]
) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
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
    e.preventDefault();
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
    e.preventDefault();
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
    e.preventDefault();
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
    e.preventDefault();
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
    e.preventDefault();
    if (numbersFieldValue.length <= 10) {
      setNumbersFieldValue(numbersFieldValue + parseInt(e.key));
    }
  }
  if (e.key === "Backspace") {
    e.preventDefault();
    setNumbersFieldValue(
      numbersFieldValue.substring(0, numbersFieldValue.length - 1)
    );
  }
};
