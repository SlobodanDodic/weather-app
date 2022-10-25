import { useLocation } from "react-router-dom";
import FeelsLike from "../components/DailyView/FeelsLike";
import SunMoonRise from "../components/DailyView/SunMoonRise";
import OtherInfo from "../components/DailyView/OtherInfo";
import dayjs from "dayjs";

export default function DailyView() {
  const location = useLocation();
  const dailyData = location.state.data.day;
  const hourlyData = location.state.data.day.hour;
  const dataLocation = location.state.data.selectedCity.location;

  return (
    <div className="min-h-screen bg-daily bg-no-repeat bg-cover bg-right bg-fixed text-xs text-white pt-20 px-4 tracking-wider">

      <div className="flex flex-row max-w-screen-lg mx-auto mb-7 p-5 text-center justify-center border-1 text-sm border-white/50 bg-gray-900/90 rounded">
        Hourly weather for {dataLocation?.name} on {dayjs(dailyData?.date).format("dddd, DD MMM")}
      </div>

      {hourlyData.map((hour) => (
        <div key={hour.time_epoch} className='max-w-screen-lg mx-auto my-2 p-2 border-1 border-white/50 bg-zinc-900/80 rounded'>

          <div className="flex flex-row m-1 py-3 text-center justify-center border-1 border-white/50 bg-gray-900/90 rounded">
            {dayjs(hour?.time).format("HH:mm")}
          </div>

          <div className="flex flex-col md:flex-row">
            <FeelsLike hour={hour} />

            <div className="flex flex-col flex-1 m-1 py-1 border-1 border-white/50 bg-zinc-900/80 rounded justify-center items-center">
              <p>{hour?.condition?.text}</p>
              <img className="h-12 w-12" src={hour?.condition?.icon} alt="weather" />
            </div>

            <SunMoonRise hour={hour} dailyData={dailyData} />
          </div>

          <OtherInfo hour={hour} />

        </div>
      ))}


    </div>
  );
}
