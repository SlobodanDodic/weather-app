import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { BsThermometerSun, BsThermometerSnow, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

export default function FeelsLike({ hour }) {
  const { conversion } = useContext(DataContext);
  const warmer = 19;

  return (
    <div className="flex flex-col flex-1 m-1 py-2 border-1 border-white/50 bg-zinc-900/80 rounded">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          {hour?.feelslike_c.toFixed(0) > warmer ? <BsThermometerSun style={{ width: "2.5rem", height: "2.5rem", marginRight: "10px", color: "darkred" }} /> : <BsThermometerSnow style={{ width: "2.5rem", height: "2.5rem", marginRight: "10px", color: "steelblue" }} />}
        </div>
        <div className="flex flex-col">
          {conversion ? (
            <>
              <h1 className="pt-1 text-xl">{hour?.feelslike_c.toFixed(0)}°C</h1>
              <p className="pb-1">Feels like</p>
            </>
          ) : (
            <>
              <h1 className="pt-1 text-xl">{hour?.feelslike_f.toFixed(0)}°F</h1>
              <p className="pb-1">Feels like</p>
            </>
          )}
        </div>
        <div className="flex flex-col">
          {hour?.feelslike_c.toFixed(0) > warmer ? <BsArrowUpShort style={{ width: "2.5rem", height: "2.5rem", color: "darkred" }} /> : <BsArrowDownShort style={{ width: "2.5rem", height: "2.5rem", color: "steelblue" }} />}
        </div>
      </div>
    </div>
  )
}
