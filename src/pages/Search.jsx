import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

const KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const { city, setCity, cities, setCities } = useContext(DataContext);
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();

  const [showDropDown, setShowDropDown] = useState(false)
  const debouncedSearch = useDebounce(city, 500); // Delayed search 500ms

  const [searchData, setSearchData] = useState([]); // Autocomplete state - Array of 10 cities
  const apiSearchUrl = `https://api.weatherapi.com/v1/search.json?key=${KEY}&q=${debouncedSearch}&days=5&aqi=yes&alerts=yes`;

  useEffect(() => {
    const getCity = () => {
      axios
        .get(apiSearchUrl)
        .then(({ data }) => {
          setSearchData(data)
          setShowDropDown(true)
        })
        .catch((err) => {
          console.log(err)
          setShowDropDown(false)
        });
    };

    if (debouncedSearch) getCity()
  }, [debouncedSearch, apiSearchUrl])

  const addCity = (clickedCity) => {
    setCities([...cities, clickedCity]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city)
    setCity('')
    navigate("/");
  };

  return (
    <div className="h-100h pb-44 flex flex-row justify-center items-end bg-search bg-no-repeat bg-cover bg-center bg-fixed bg-zinc-900/60 text-white/70 text-sm rounded-md">
      <div className="flex max-w-xs w-screen m-2">
        <form action="submit" className="w-full">

          {disabled && showDropDown && (
            <ul className="tracking-wider text-xs">
              {searchData?.map((optionCity) => (
                <li className="bg-zinc-900/80 hover:bg-zinc-900 p-2 my-1 rounded border-t-1 hover:cursor-pointer"
                  key={optionCity.id}
                  onClick={() => {
                    setCity(optionCity.name)
                    setShowDropDown(false)
                    setSearchData(null)
                    setDisabled(false)
                  }}>
                  {optionCity.name + ", " + optionCity.country}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-row">
            <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" placeholder="Search for the city..." className="flex flex-col basis-3/4 btn-primary rounded-none bg-zinc-900/60 hover:bg-zinc-900 capitalize" />
            <button disabled={disabled} onClick={handleSubmit} className={disabled ? "btn-add hover:cursor-not-allowed" : "btn-add"}>
              Add
            </button>
          </div>

        </form>
      </div>
    </div >
  );
}
