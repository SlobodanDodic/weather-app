import { useFetch } from "../../hooks/useFetch";
import LoadingInfo from "../LoadingInfo";
import CityWeather from "./CityWeather/CityWeather";
const KEY = process.env.REACT_APP_API_KEY;

export default function CurrentCityLink() {

  const apiIPUrl = `/ip.json?key=${KEY}&q=auto:ip`;
  const { data: currentCity, loading, error, handleRefetch } = useFetch(apiIPUrl);
  const yourLocation = (currentCity?.city)

  if (loading) return <LoadingInfo />
  if (error) console.log(error);

  return (

    <div>
      {/* <div onClick={handleRefetch} className="btn-primary cursor-pointer">Get Current Location</div> */}

      <CityWeather city={yourLocation} />
    </div>
  );
}