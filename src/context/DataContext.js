import { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [conversion, setConversion] = useToggle(true); //Celsius - Fahrenheit
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(""); // Autocomplete state - typed charaters for search

  return (
    <DataContext.Provider
      value={{ conversion, setConversion, cities, setCities, city, setCity }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
