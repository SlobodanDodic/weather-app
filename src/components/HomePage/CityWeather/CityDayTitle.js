import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import useToggle from "../../../hooks/useToggle";
import { GiNightSky } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import dayjs from "dayjs";
import ConfirmModal from "./ConfirmModal";

export default function CityDayTitle({ selectedCity }) {
  const { setCities, cities } = useContext(DataContext);
  const [hiddenConfirmation, setHiddenConfirmation] = useToggle(true)

  const removeCity = () => {
    setCities(cities.filter((c) => c !== selectedCity.location.name))
    window.location.reload()
  }

  return (
    <div className="relative flex flex-col md:flex-row m-1 p-1 border-1 border-white/50 bg-zinc-900/60 rounded text-slate-200">

      <div className="flex flex-1 items-center justify-center py-2 font-bold tracking-wider">
        <p>{dayjs(selectedCity?.location?.localtime).format("dddd, D MMMM YYYY")}</p>
      </div>

      <div className="flex flex-1 justify-center py-2 uppercase font-bold tracking-widest subpixel-antialiased">
        <div className="flex flex-col">
          <p className='flex-row'>{selectedCity?.location?.name}</p>
          <p className='flex-row'>{selectedCity?.location?.country}</p>
        </div>
      </div>

      <div className="flex flex-1 justify-center py-2 font-bold tracking-wider">
        {selectedCity?.current?.is_day ? (
          <div className="flex items-center">
            <p className="">{dayjs(selectedCity?.location?.localtime).format("h:mm A")}</p>
            <p className="px-2">Daylight</p>
            <BsSun style={{ height: "1.25rem", width: "1.25rem" }} />
          </div>
        ) : (
          <div className="flex items-center">
            <p className="">{dayjs(selectedCity?.location?.localtime).format("h:mm A")}</p>
            <p className="px-2">Night</p>
            <GiNightSky style={{ height: "1.25rem", width: "1.25rem" }} />
          </div>
        )}
      </div>

      <div className="flex basis-5 justify-center p-2">
        <button onClick={setHiddenConfirmation}><RiDeleteBin5Line style={{ height: "1.25rem", width: "1.25rem", color: "darkred" }} /></button>
        <ConfirmModal hiddenConfirmation={hiddenConfirmation} setHiddenConfirmation={setHiddenConfirmation} removeCity={removeCity} selectedCity={selectedCity} />
      </div>
    </div>
  );
}
