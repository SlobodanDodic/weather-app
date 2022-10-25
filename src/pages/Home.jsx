import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import CityWeather from "../components/HomePage/CityWeather/CityWeather";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { Carousel } from 'react-responsive-carousel';
import Tooltip from "../components/Tooltip";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;

export default function Home() {
  const { cities, setCities } = useContext(DataContext);
  const apiIPUrl = `https://api.weatherapi.com/v1/ip.json?key=${KEY}&q=auto:ip`;

  const handleClearStorage = () => { setCities([cities[0]]) }

  useEffect(() => {
    axios
      .get(apiIPUrl)
      .then(({ data }) => { if (!cities.includes(data?.city)) { setCities([data?.city]) } })
      .catch((err) => {
        console.log(err)
      });
  }, [apiIPUrl, cities, setCities])

  return (
    <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white pt-24 px-2">

      <div className="max-w-screen-lg flex justify-between py-2 mx-auto items-center">
        <Link to="/search" className="flex flex-col-reverse sm:flex-row btn-primary">
          <IoIosAddCircleOutline style={{ width: "1rem", height: "1rem", marginRight: "5px" }} />
          Add city
        </Link>

        <Tooltip text="Clear all cities and show weather only for your location">
          <button onClick={handleClearStorage} className="flex flex-col sm:flex-row btn-primary">
            Clear all
            <TiArrowBackOutline style={{ width: "1rem", height: "1rem", marginLeft: "5px" }} />
          </button>
        </Tooltip>
      </div>

      <div className="max-w-screen-lg mx-auto mt-5">
        <Carousel className="border-1 border-white/50 bg-zinc-900/70 rounded" showThumbs={false} autoFocus={true} useKeyboardArrows={true} infiniteLoop>
          {cities?.map((city, index) => (
            <CityWeather key={index} city={city} />
          ))}
        </Carousel>
      </div>

    </div>
  );
}