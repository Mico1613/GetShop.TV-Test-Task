import React from "react";
import AppStyles from "./App.module.scss";
import InfoScreen from "./screens/InfoScreen";
import InputNumberScreen from "./screens/InputNumberScreen";
import PromoVideoScreen from "./screens/PromoVideoScreen";
function App() {
  const screens = {
    first: { id: 1, component: <PromoVideoScreen /> },
    second: { id: 2, component: <InputNumberScreen /> },
    third: { id: 3, component: <InfoScreen /> },
  };
  return (
    <div className={AppStyles.app}>
      <main className={AppStyles.container}>{screens.first.component}</main>
    </div>
  );
}

export default App;
