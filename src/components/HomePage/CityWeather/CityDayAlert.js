import useToggle from '../../../hooks/useToggle';
import { RiAlertFill } from 'react-icons/ri';
import { MdStorm } from 'react-icons/md';
import dayjs from "dayjs";

export default function CityDayAlert({ alert, color }) {
  const [hidden, setHidden] = useToggle(true)

  return (
    <div className='m-2'>
      <MdStorm onClick={setHidden} type="button" className="cursor-pointer" style={{ height: "1.25rem", width: "1.25rem", color: `${color}` }} />

      <div className={hidden ? "hidden" : "relative z-10"}>

        <div className="fixed inset-0 bg-stone-900 bg-opacity-50 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-scroll">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="p-7 relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

              <div className="flex flex-row justify-center">
                <RiAlertFill style={{ height: "4rem", width: "4rem", color: "#b91c1c" }} />
              </div>
              <div className="flex flex-row justify-center">
                <h4 className="text-xl my-2 font-bold text-gray-700 tracking-wider">Weather Alerts</h4>
              </div>

              <div className="my-3 text-left sm:mt-0 sm:ml-4">
                <div className="mt-2 text-justify text-sm text-gray-600">
                  <h4 className="text-lg my-2 font-bold text-gray-700">{alert?.category}</h4>
                  <p className="mb-1"><span className='font-bold'>Event: </span>{alert?.event}</p>
                  <p className="mb-1"><span className='font-bold'>Effective: </span>{dayjs(alert?.effective).format("dddd, D MMM, HH:mm")}</p>
                  <p className="mb-1"><span className='font-bold'>Expires: </span>{dayjs(alert?.expires).format("dddd, D MMM, HH:mm")}</p>
                  <p className="mb-1"><span className='font-bold'>Area: </span>{alert?.areas}</p>
                  <p className="mb-1"><span className='font-bold'>Instruction: </span>{alert?.instruction}</p>
                  <p className="lowercase"><span className='font-bold capitalize'>Desciption: </span>{alert?.desc}</p>
                </div>
              </div>

              <div className="bg-red-700 my-3 rounded-lg">
                <button onClick={setHidden} className="btn-primary w-full border-none text-white font-bold">
                  Ok, I'll be careful
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
