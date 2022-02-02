import React from "react";
import NumbersPanelStyles from "./NumbersPanel.module.scss";
type Props = {};

function NumbersPanel({}: Props) {
  
//   const first = React.useRef<null | HTMLDivElement>(null);
//   function kek(e: any) {
//     console.log(e.charCode);
//   }
//   React.useEffect(() => {
//     document.addEventListener("keypress", kek);
//     return () => {
//       document.removeEventListener("keypress", kek);
//     };
//   }, []);
    

  const buttons = [
    { id: 0, value: "1", class: `${NumbersPanelStyles.elements}` },
    { id: 1, value: "2", class: `${NumbersPanelStyles.elements}` },
    { id: 2, value: "3", class: `${NumbersPanelStyles.elements}` },
    { id: 3, value: "4", class: `${NumbersPanelStyles.elements}` },
    { id: 4, value: "5", class: `${NumbersPanelStyles.elements}` },
    { id: 5, value: "6", class: `${NumbersPanelStyles.elements}` },
    { id: 6, value: "7", class: `${NumbersPanelStyles.elements}` },
    { id: 7, value: "8", class: `${NumbersPanelStyles.elements}` },
    { id: 8, value: "9", class: `${NumbersPanelStyles.elements}` },
    {
      id: 9,
      value: "Стереть",
      class: `${NumbersPanelStyles.elements} ${NumbersPanelStyles.resetEl}`,
    },
    { id: 10, value: "0", class: `${NumbersPanelStyles.elements}` },
  ];

  return (
    <div className={NumbersPanelStyles.numbersPanel}>
      {buttons.map((button, index) => {
        return (
          <button key={`${button}_${index}`} className={button.class}>
            {button.value}
          </button>
        );
      })}
    </div>
  );
}

export default NumbersPanel;
