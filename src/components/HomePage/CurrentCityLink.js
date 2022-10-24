import { useFetch } from "../../hooks/useFetch";
import LoadingInfo from "../LoadingInfo";
const KEY = process.env.REACT_APP_API_KEY;

export default function CurrentCityLink() {

  const apiIPUrl = `/ip.json?key=${KEY}&q=auto:ip`;
  const { loading, error } = useFetch(apiIPUrl);

  if (loading) return <LoadingInfo />
  if (error) console.log(error);



  return (
    <div>Current city</div>
  );
}
