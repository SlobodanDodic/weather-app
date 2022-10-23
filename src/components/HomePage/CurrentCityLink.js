import React, { useContext } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import DataContext from "../../context/DataContext";
import { useFetch } from "../../hooks/useFetch";
const KEY = process.env.REACT_APP_API_KEY;

export default function CurrentCityLink() {
  const { cities, setCities } = useContext(DataContext);

  const apiIPUrl = `/ip.json?key=${KEY}&q=auto:ip`;
  const { data: city } = useFetch(apiIPUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities([city.city, ...cities]);
  };

  return (
    <button
      onClick={handleSubmit}
      className="flex flex-col sm:flex-row btn-primary"
    >
      Your location
      <TiArrowBackOutline style={{ width: "1rem", height: "1rem", marginLeft: "5px" }} />
    </button>
  );
}
