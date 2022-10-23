import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import CityWeather from "../components/HomePage/CityWeather/CityWeather";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import CurrentCityLink from "../components/HomePage/CurrentCityLink";

export default function Home() {
  const { cities } = useContext(DataContext);

  return (
    <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white pt-20 px-2">

      <div className="max-w-screen-lg flex justify-between py-2 mx-auto items-center">
        <Link to="/search" className="flex flex-col-reverse sm:flex-row btn-primary">
          <IoIosAddCircleOutline style={{ width: "1rem", height: "1rem", marginRight: "5px" }} />
          Add city
        </Link>

        <CurrentCityLink />
      </div>

      {cities?.map((city, index) => (
        <CityWeather key={index} city={city} />
      ))}

    </div>
  );
}