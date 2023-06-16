import { useState } from "react";

export type TAppearanceStatus = "isOpening" | "opened" | "isClosing" | "closed";

export interface IUseAppearanceAnimationArgs {
  initialState: TAppearanceStatus;
  animationDuration: number;
}

export function useAppearanceAnimation(args: IUseAppearanceAnimationArgs) {
  const { initialState, animationDuration } = args;

  const [appearanceState, setAppearanceState] =
    useState<TAppearanceStatus>(initialState);

  const onOpen = () => {
    setAppearanceState("isOpening");

    setTimeout(() => {
      setAppearanceState("opened");
    }, animationDuration);
  };

  const onClose = () => {
    setAppearanceState("isClosing");

    setTimeout(() => {
      setAppearanceState("closed");
    }, animationDuration);
  };

  return { appearanceState, onOpen, onClose };
}
