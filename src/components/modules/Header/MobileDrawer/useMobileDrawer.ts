import type { TOpenStatus } from "@src/core/types/TOpenStatus";
import { useReducer } from "react";
import { animationDuration } from "@src/core/constant/animation";

export function useMobileDrawer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const burgerOpenClickHandler = () => {
    dispatch({ type: "SET_MOBILE_MENU_IS_OPENING" });

    setTimeout(() => {
      dispatch({ type: "SET_MOBILE_MENU_OPENED" });
    }, animationDuration);
  };

  const burgerCloseClickHandler = () => {
    dispatch({ type: "SET_MOBILE_MENU_IS_CLOSING" });

    setTimeout(() => {
      dispatch({ type: "SET_MOBILE_MENU_CLOSED" });
    }, animationDuration);
  };

  return {
    state,
    burgerOpenClickHandler,
    burgerCloseClickHandler,
  };
}

export type TState = {
  mobileMenu: TOpenStatus;
};

export type TActionType =
  | "SET_MOBILE_MENU_IS_OPENING"
  | "SET_MOBILE_MENU_OPENED"
  | "SET_MOBILE_MENU_IS_CLOSING"
  | "SET_MOBILE_MENU_CLOSED";

export type TAction = { type: TActionType };

export const initialState: TState = {
  mobileMenu: "closed",
};

export function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case "SET_MOBILE_MENU_IS_OPENING": {
      return {
        ...state,
        mobileMenu: "isOpening",
      };
    }
    case "SET_MOBILE_MENU_OPENED": {
      return {
        ...state,
        mobileMenu: "opened",
      };
    }
    case "SET_MOBILE_MENU_IS_CLOSING": {
      return {
        ...state,
        mobileMenu: "isClosing",
      };
    }
    case "SET_MOBILE_MENU_CLOSED": {
      return {
        ...state,
        mobileMenu: "closed",
      };
    }

    default: {
      return { ...state };
    }
  }
}
