import React from "react";
import ScreenLayout from "../../components/ScreenLayout";

type Props = {
  switchToFirstScreen: () => void;
  switchToThirdScreen: () => void;
};

function InputNumberScreen({
  switchToFirstScreen,
  switchToThirdScreen,
}: Props) {
  return (
    <ScreenLayout switchToFirstScreen={switchToFirstScreen}></ScreenLayout>
  );
}

export default InputNumberScreen;
