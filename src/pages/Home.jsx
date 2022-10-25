import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import CityWeather from "../components/HomePage/CityWeather/CityWeather";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import CurrentCityLink from "../components/HomePage/CurrentCityLink";

export default function Home() {
  const { cities, clearStorage } = useContext(DataContext);

  const handleClearStorage = () => {
    clearStorage();
    window.location.reload();
  }
  return (
    <div className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white pt-24 px-2">

      <div className="max-w-screen-lg flex justify-between py-2 mx-auto items-center">
        <Link to="/search" className="flex flex-col-reverse sm:flex-row btn-primary">
          <IoIosAddCircleOutline style={{ width: "1rem", height: "1rem", marginRight: "5px" }} />
          Add city
        </Link>

        <button
          onClick={handleClearStorage}
          className="flex flex-col sm:flex-row btn-primary"
        >
          Clear all
          <TiArrowBackOutline style={{ width: "1rem", height: "1rem", marginLeft: "5px" }} />
        </button>
      </div>

      <Carousel className="mx-4 my-2 border-1 border-white/50 bg-zinc-900/60 rounded" showThumbs={false} autoFocus={true} useKeyboardArrows={true} infiniteLoop>
        {cities?.map((city, index) => (
          <CityWeather key={index} city={city} />
        ))}
      </Carousel>

      {/* <CurrentCityLink /> */}


    </div>
  );
}