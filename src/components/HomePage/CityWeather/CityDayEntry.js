import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import CityDayAlert from "./CityDayAlert";

export default function CityDayEntry({ selectedCity, error }) {
  const { conversion } = useContext(DataContext);
  const alerts = selectedCity?.alerts?.alert;

  if (error) console.log(error);

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {selectedCity?.forecast?.forecastday?.map((day) => (
        <div className="flex flex-col flex-1">

          <Link to={`daily/${selectedCity.location.name.replace(/ /g, '_')}`} key={day?.date_epoch}
            state={{ data: { day, selectedCity } }}
            className="flex flex-col flex-1 items-center border-1 border-white/50 m-1 p-1 bg-zinc-900/60 rounded">

            <p className="py-1 border-b-1 border-l-yellow-100">{dayjs(day?.date).format("dddd, D MMM")}</p>
            <p className="py-1">{day?.day?.condition?.text}</p>
            <img className="h-9 w-9" src={day?.day?.condition?.icon} alt="weather" />
            <div className="flex flex-col items-center">

              {conversion ? (
                <> <p className="py-1">min: {day?.day?.mintemp_c.toFixed(0)}°C</p> <p className="py-1">max: {day?.day?.maxtemp_c.toFixed(0)}°C</p> </>
              ) : (
                <> <p className="py-1">min: {day?.day?.mintemp_f.toFixed(0)}°F</p> <p className="py-1">max: {day?.day?.maxtemp_f.toFixed(0)}°F</p> </>
              )}
            </div>
          </Link>

          {alerts && <div className="flex flex-row flex-1 justify-center border-1 border-white/50 m-1 p-1 bg-zinc-900/60 rounded">
            {alerts?.map((alert, index) => (
              dayjs(day?.date).format("dddd, D MMM") === dayjs(alert?.effective).format("dddd, D MMM") && <CityDayAlert key={index} alert={alert} color='red' />
            ))}
            {alerts?.map((alert, index) => (
              dayjs(day?.date).format("dddd, D MMM") === dayjs(alert?.expires).format("dddd, D MMM") && <CityDayAlert key={index} alert={alert} color='darkred' />
            ))}
          </div>}

        </div>
      ))}
    </div>
  );
}
