import CityDayEntry from "./CityDayEntry";
import CityDayTitle from "./CityDayTitle";
import LoadingInfo from "../../LoadingInfo";
import { useFetch } from "../../../hooks/useFetch";
const KEY = process.env.REACT_APP_API_KEY;

export default function City({ city }) {
  const apiForecastUrl = `/forecast.json?key=${KEY}&q=${city}&days=5&aqi=yes&alerts=yes`;
  const { data: selectedCity, loading, error } = useFetch(apiForecastUrl);

  if (loading) return <LoadingInfo />

  return (
    <div className="max-w-screen-lg mx-auto text-sm font-light my-3 p-3 border-1 border-white/50 bg-zinc-900/60 rounded">
      <CityDayTitle selectedCity={selectedCity} loading={loading} error={error} />
      <CityDayEntry selectedCity={selectedCity} loading={loading} error={error} />
    </div>
  );
}
