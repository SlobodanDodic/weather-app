import LoadingInfo from "../LoadingInfo";
import CityWeather from "./CityWeather/CityWeather";

export default function CurrentCityLink() {
  const { yourLocation, loading, error } = useContext(DataContext);

  if (loading) return <LoadingInfo />
  if (error) console.log(error);

  return (

    <div>
      {/* <div onClick={handleRefetch} className="btn-primary cursor-pointer">Get Current Location</div> */}


      <CityWeather city={yourLocation} />
    </div>
  );
}