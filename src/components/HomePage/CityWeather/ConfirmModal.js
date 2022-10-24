import { RiDeleteBin5Line } from "react-icons/ri";

export default function ConfirmModal({ hiddenConfirmation, setHiddenConfirmation, removeCity, selectedCity }) {

  return (
    <div className='absolute top-0 left-0 w-full'>

      <div className={hiddenConfirmation ? "hidden" : "absolute z-10 w-full"}>

        <div className="absolute inset-0 bg-stone-900 bg-opacity-50 transition-opacity"></div>

        <div className="inset-0 z-10 overflow-scroll">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="transform bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg rounded-lg">

              <div className="flex flex-row justify-center pt-5">
                <RiDeleteBin5Line style={{ height: "2rem", width: "2rem", color: "#b91c1c" }} />
              </div>
              <div className="flex flex-row justify-center">
                <p className="text-lg mt-4 font-bold text-gray-600 tracking-wide text-center">Delete confirmation</p>
              </div>
              <div className="flex flex-row justify-center">
                <p className="text-sm my-2 font-bold text-gray-600 tracking-wide text-center">Are you sure you want to remove {selectedCity?.location?.name}?</p>
              </div>

              <div className="my-3 text-left sm:mt-0 sm:ml-4">
                <div className="mt-2 text-justify text-sm text-gray-600">

                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center bg-gray-100 px-4 py-3 rounded-lg">
                <button onClick={setHiddenConfirmation} className="btn-primary bg-gray-600 hover:bg-gray-800 inline-flex text-white m-1">
                  Cancel
                </button>
                <button onClick={removeCity} className="btn-primary bg-red-700 hover:bg-red-800 inline-flex text-white m-1">
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

