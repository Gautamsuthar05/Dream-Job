import { createContext, useState } from "react";
const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    type: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const value = { searchFilter, setSearchFilter, isSearched, setIsSearched };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContext;
