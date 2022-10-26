import useToggle from '../../hooks/useToggle';
import { RiAlertFill } from 'react-icons/ri';
import { MdStorm } from 'react-icons/md';
import dayjs from "dayjs";

export default function CityDayAlert({ alert, color }) {
  const [hidden, setHidden] = useToggle(true)

  return (
    <div>
      <div className="cursor-pointer mr-1 my-1 p-1">
        <MdStorm onClick={setHidden} type="button" style={{ height: "1rem", width: "1rem", color: `${color}` }} />
      </div>

      <div className={hidden ? "hidden" : "flex justify-center absolute z-10 top-0 left-0 w-full"}>

        <div className="absolute inset-0 bg-stone-900 bg-opacity-70 transition-opacity"></div>

        <div className="inset-0 z-10 text-xs overflow-scroll p-5 my-3 w-4/5 sm:w-1/2 transform rounded-lg bg-white text-left shadow-xl transition-all">

          <div className="flex flex-row justify-center">
            <RiAlertFill style={{ height: "2.5rem", width: "2.5rem", color: "#b91c1c" }} />
          </div>

          <div className="flex flex-row justify-center">
            <h4 className="text-lg my-2 font-bold text-gray-700 tracking-wider">Weather Alerts</h4>
          </div>

          <div className="my-1">
            <div className="text-center text-gray-600 overflow-scroll">
              <h4 className="text-sm mb-1 font-bold text-gray-700">{alert?.category}</h4>
              <p className="mb-1"><span className='font-bold'>Event: </span>{alert?.event}</p>
              <p className="mb-1"><span className='font-bold'>Effective: </span>{dayjs(alert?.effective).format("dddd, D MMM, HH:mm")}</p>
              <p className="mb-3"><span className='font-bold'>Expires: </span>{dayjs(alert?.expires).format("dddd, D MMM, HH:mm")}</p>
            </div>
          </div>

          <div className="bg-red-700 mt-2 rounded-lg">
            <button onClick={setHidden} className="btn-primary w-full border-none text-white font-bold uppercase">
              Ok, I'll be careful
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
