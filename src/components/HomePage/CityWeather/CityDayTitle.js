import DaytimeAndDelete from "./DaytimeAndDelete";
import { GiNightSky } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import dayjs from "dayjs";

export default function CityDayTitle({ selectedCity }) {

  return (
    <div className="relative flex flex-col md:flex-row m-1 p-1 border-1 border-white/50 rounded bg-zinc-900/60 text-xs text-slate-200">

      <div className="flex flex-1 items-center justify-center py-2 tracking-wide">
        <p>{dayjs(selectedCity?.location?.localtime).format("dddd, D MMMM YYYY")}</p>
      </div>

      <div className="flex flex-1 justify-center py-2 uppercase font-bold tracking-widest subpixel-antialiased">
        <div className="flex flex-col">
          <p className='flex-row'>{selectedCity?.location?.name}</p>
          <p className='flex-row'>{selectedCity?.location?.country}</p>
        </div>
      </div>

      <div className="flex flex-1 justify-center py-2 tracking-wide">
        {selectedCity?.current?.is_day ? (
          <DaytimeAndDelete selectedCity={selectedCity} localtime={selectedCity?.location?.localtime} text={'Daytime'}
            icon={<BsSun style={{ height: "1.25rem", width: "1.25rem", color: "#faba00", marginRight: "1.25rem" }} />}
          />
        ) : (
          <DaytimeAndDelete selectedCity={selectedCity} localtime={selectedCity?.location?.localtime} text={'Night'}
            icon={<GiNightSky style={{ height: "1.25rem", width: "1.25rem", color: "#607d8b", marginRight: "1.25rem" }} />}
          />
        )}
      </div>

    </div>
  );
}
