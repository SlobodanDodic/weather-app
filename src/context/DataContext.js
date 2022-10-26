import { createContext, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [conversion, setConversion] = useToggle(true); //Celsius - Fahrenheit
  const [city, setCity] = useState(""); // Autocomplete state - typed charaters for search

  const [cities, setCities] = useState(() => {
    const stored = localStorage.getItem("Cities");
    const initialValue = JSON.parse(stored);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem('Cities', JSON.stringify(cities));
  }, [cities]);

  return (
    <DataContext.Provider
      value={{ conversion, setConversion, cities, setCities, city, setCity }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
