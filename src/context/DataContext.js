import { createContext } from "react";
import { useLocalStorage } from "../hooks/useStorage";
import useToggle from "../hooks/useToggle";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [conversion, setConversion] = useToggle(true); //Celsius - Fahrenheit
  const [cities, setCities, clearStorage] = useLocalStorage("Cities", []); // Names of selected cities

  return (
    <DataContext.Provider value={{ cities, setCities, conversion, setConversion, clearStorage }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
