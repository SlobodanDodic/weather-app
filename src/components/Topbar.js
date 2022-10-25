import { useContext } from "react";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

export default function Topbar() {
  const { conversion, setConversion } = useContext(DataContext);

  return (
    <div className="w-screen fixed bg-zinc-900/60 border-b-1 border-white/20">
      <div className="max-w-screen-lg flex justify-between py-4 text-white mx-auto items-center">
        <Link to="/" className="btn-primary">
          Home <GoHome style={{ width: "0.85rem", height: "0.85rem", display: "inline", paddingBottom: "1px" }} />
        </Link>
        <button onClick={setConversion} className="btn-primary">
          {conversion ? <p>↻ Imperial</p> : <p>↻ Metric</p>}
        </button>
      </div>
    </div>
  );
}
