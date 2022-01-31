import React, { useState } from "react";
import AppStyles from "./App.module.scss";
import InfoScreen from "./screens/InfoScreen";
import InputNumberScreen from "./screens/InputNumberScreen";
import PromoVideoScreen from "./screens/PromoVideoScreen";
function App() {
  const switchToSecondScreen = () => {
    setCurrentScreen(screens.third);
  };
  const screens = {
    first: <PromoVideoScreen switchToSecondScreen={switchToSecondScreen} />,
    second: <InputNumberScreen />,
    third: <InfoScreen />,
  };

  const [currentScreen, setCurrentScreen] = useState(screens.first);

  return (
    <div className={AppStyles.app}>
      <main className={AppStyles.container}>{currentScreen}</main>
    </div>
  );
}

export default App;
