import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { GiNightSky } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import LoadingInfo from "../../LoadingInfo";
import dayjs from "dayjs";

export default function CityDayTitle({ selectedCity, loading, error }) {
  const { clearStorage, cities } = useContext(DataContext);

  console.log(cities)

  if (loading) return <LoadingInfo />;
  if (error) console.log(error);

  return (
    <div className="flex flex-col md:flex-row m-1 p-1 border-1 border-white/50 bg-zinc-900/60 rounded">

      <div className="flex flex-1 items-center justify-center py-2">
        <p>{dayjs(selectedCity?.location?.localtime).format("dddd, D MMMM YYYY")}</p>
      </div>

      <div className="flex flex-1 justify-center py-2 text-lg">
        <p className="text-slate-300">{selectedCity?.location?.name}, {selectedCity?.location?.country}</p>
      </div>

      <div className="flex flex-1 justify-center py-2">
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

      <div className="flex basis-20 justify-center p-2">
        <button onClick={clearStorage} className="btn-primary">Delete all</button>
      </div>
    </div>
  );
}
