import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocalStorage } from "../hooks/useStorage";
import useToggle from "../hooks/useToggle";
const DataContext = createContext({});

const KEY = process.env.REACT_APP_API_KEY;

export const DataProvider = ({ children }) => {
  const [conversion, setConversion] = useToggle(true); //Celsius - Fahrenheit
  const [cities, setCities, clearStorage] = useLocalStorage("Cities", []); // Names of selected cities
  const [city, setCity] = useState(""); // Autocomplete state - typed charaters for search

  const apiIPUrl = `/ip.json?key=${KEY}&q=auto:ip`;
  const { data: currentCity, loading, error, handleRefetch } = useFetch(apiIPUrl);
  const yourLocation = (currentCity?.city)

  return (
    <DataContext.Provider
      value={{ conversion, setConversion, cities, setCities, clearStorage, city, setCity, yourLocation, loading, error, handleRefetch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
