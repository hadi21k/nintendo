"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    showLargeDeviceScrolledNavbar: false,
  });

  const updateGlobalState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <GlobalContext.Provider value={{ state, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use global context
export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
