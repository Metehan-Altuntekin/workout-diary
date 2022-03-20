import { createContext } from "react";

const MainContext = createContext();
export function ContextProvider({ children }) {
  const name = "Larry";
  return <MainContext.Provider value={name}>{children}</MainContext.Provider>;
}

export default MainContext;
