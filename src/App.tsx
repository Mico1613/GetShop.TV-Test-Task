import React from "react";
import AppStyles from "./App.module.scss";
import InfoScreen from "./screens/InfoScreen";
import InputNumberScreen from "./screens/InputNumberScreen";
import PromoVideoScreen from "./screens/PromoVideoScreen";
function App() {
  const screens = {
    first: <PromoVideoScreen />,
    second: <InputNumberScreen />,
    third: <InfoScreen />,
  };
  return (
    <div className={AppStyles.app}>
      <main className={AppStyles.container}>{screens.first}</main>
    </div>
  );
}

export default App;
