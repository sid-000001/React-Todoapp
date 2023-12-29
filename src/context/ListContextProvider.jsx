import React, { createContext } from "react";

export const ListContext = createContext();

export default function ListContextProvider({ children }) {
  const msg = "Happy New Year 2024";
  return <ListContext.Provider value={msg}>{children}</ListContext.Provider>;
}
