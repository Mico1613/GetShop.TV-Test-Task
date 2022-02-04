import React, { useState } from "react";
import AppStyles from "./App.module.scss";
import InfoScreen from "./screens/InfoScreen";
import InputNumberScreen from "./screens/InputNumberScreen";
import PromoVideoScreen from "./screens/PromoVideoScreen";
import video from "./assets/video.mp4";

function App() {
  const switchToFirstScreen = () => {
    setCurrentScreen(screens.first);
  };
  const switchToSecondScreen = () => {
    setCurrentScreen(screens.second);
  };
  const switchToThirdScreen = () => {
    setCurrentScreen(screens.third);
  };

  const screens = {
    first: (
      <PromoVideoScreen
        switchToSecondScreen={switchToSecondScreen}
        video={video}
      />
    ),
    second: (
      <InputNumberScreen
        switchToFirstScreen={switchToFirstScreen}
        switchToThirdScreen={switchToThirdScreen}
      />
    ),
    third: <InfoScreen switchToFirstScreen={switchToFirstScreen} />,
  };

  const [currentScreen, setCurrentScreen] = useState(screens.second);

  return (
    <div className={AppStyles.app}>
      <main className={AppStyles.container}>{currentScreen}</main>
    </div>
  );
}

export default App;
