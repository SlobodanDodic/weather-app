import { RiDeleteBin5Line } from "react-icons/ri";

export default function ConfirmModal({ hiddenConfirmation, setHiddenConfirmation, remove, text }) {

  return (
    <div className='absolute left-0 w-full text-xs'>

      <div className={hiddenConfirmation ? "hidden" : "absolute z-10 w-full"}>

        <div className="z-10 overflow-scroll">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <div className="transform bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg rounded-lg">

              <div className="flex flex-row justify-center pt-5">
                <RiDeleteBin5Line style={{ height: "1.5rem", width: "2rem", color: "#b91c1c" }} />
              </div>
              <div className="flex flex-row justify-center">
                <p className="text-sm mt-4 font-bold text-gray-600 tracking-wide text-center">Delete confirmation</p>
              </div>
              <div className="flex flex-row justify-center">
                <p className="my-2 font-bold text-gray-600 tracking-wide text-center">Are you sure you want to remove {text}?</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center bg-gray-100 px-4 py-3 rounded-lg">
                <button onClick={setHiddenConfirmation} className="btn-primary bg-gray-600 hover:bg-gray-800 inline-flex justify-center text-white m-1">
                  Cancel
                </button>
                <button onClick={remove} className="btn-primary bg-red-700 hover:bg-red-800 inline-flex justify-center text-white m-1">
                  Remove
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

