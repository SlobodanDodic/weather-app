import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Tooltip from "../Tooltip";
import ConfirmModal from "./ConfirmModal";
import useToggle from "../../hooks/useToggle";
import { RiDeleteBin5Line } from "react-icons/ri";
import dayjs from "dayjs";

export default function DaytimeAndDelete({ selectedCity, localtime, text, icon }) {
  const { cities, setCities } = useContext(DataContext);
  const [hiddenConfirmationOne, setHiddenConfirmationOne] = useToggle(true)

  const removeCity = () => {
    setCities(cities.filter((c) => c !== selectedCity.location.name))
    if (cities.length < 3) { window.location.reload() }
  }

  return (
    <div className="flex items-center">
      <p className="">{dayjs(localtime).format("h:mm A")}</p>
      <p className="px-2">{text}</p>
      {icon}
      <Tooltip text="Delete the city">
        <button onClick={setHiddenConfirmationOne}><RiDeleteBin5Line style={{ height: "1rem", width: "1rem", color: "darkred" }} /></button>
      </Tooltip>
      <ConfirmModal hiddenConfirmation={hiddenConfirmationOne} setHiddenConfirmation={setHiddenConfirmationOne} remove={removeCity} text={selectedCity?.location?.name} />
    </div>
  )
}
