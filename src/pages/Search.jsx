import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

const KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const { cities, setCities } = useContext(DataContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const [city, setCity] = useState(""); // Autocomplete state - typed charaters for search
  const debouncedSearch = useDebounce(city, 500); // Delayed search 500ms

  const [searchData, setSearchData] = useState([]); // Autocomplete state - Array of 10 cities
  const apiSearchUrl = `http://api.weatherapi.com/v1/search.json?key=${KEY}&q=${debouncedSearch}&days=5&aqi=yes&alerts=yes`;

  useEffect(() => {
    const getCity = () => {
      axios
        .get(apiSearchUrl)
        .then(({ data }) => {
          setSearchData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (debouncedSearch) getCity()
  }, [debouncedSearch, apiSearchUrl])

  const addCity = (clickedCity) => {
    setCities([...cities, clickedCity]);
    console.log(clickedCity)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setCity("");
  };

  return (
    <div className="h-100h pb-44 flex justify-center items-end bg-search bg-no-repeat bg-cover bg-center bg-fixed bg-zinc-900/60 text-white/70 text-sm rounded-md">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for the city..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setDisabled(false);
          }}
          className="bg-zinc-900/60 border-1 rounded-sm hover:opacity-70 p-2 placeholder:italic placeholder:text-white/70 shadow-lg focus:outline-none focus:border-white border-white/70"
        />
        {city && (
          <ul className="bg-zinc-900/60 border-1 rounded-sm top-0">
            {searchData?.map((optionCity) => (
              <li key={optionCity.id} onClick={() => addCity(optionCity.name)}>
                {optionCity.name}
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-zinc-900/60 mx-2 p-2 border-1 rounded-sm hover:opacity-70 shadow-lg border-white/70"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}
