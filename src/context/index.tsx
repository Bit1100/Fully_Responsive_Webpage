import { createContext, useContext, useRef, useReducer } from "react";

import {
  children,
  initialStateType,
  actionType,
  appContextType,
} from "../types";

const appContext = createContext<appContextType | null>(null);

const reducer = (state: initialStateType, action: actionType) => {
  switch (action.type) {
    case "SIDEBAR_ISSCALED":
      return { ...state, isScaled: !state.isScaled };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: children) => {
  // INitial State
  const initialState = {
    isScaled: false,
  };

  const homeRef = useRef<HTMLDivElement>(null!);
  const subscribeRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const eventsRef = useRef<HTMLDivElement>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);

  // Handling the Scroll Behaviour Smoothly
  const handleScroll = (ref: HTMLDivElement) => {
    ref.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "center",
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appContext.Provider
      value={{
        state,
        dispatch,
        handleScroll,
        servicesRef,
        eventsRef,
        footerRef,
        homeRef,
        subscribeRef,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);

  if (!context) {
    throw new Error("Must Use appContext within appContextProvider");
  }

  return context;
};
