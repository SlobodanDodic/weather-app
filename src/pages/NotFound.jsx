import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && navigate(-1);
  }, [counter, navigate]);

  return (
    <div className="h-100h w-screen bg-notFound bg-no-repeat bg-cover bg-center">
      <div className="text-center h-100h flex flex-col justify-end items-center absolute bottom-0 overflow-hidden">
        <h1 className="bg-zinc-900/60 w-screen pt-10 text-yellow-400 text-5xl">404</h1>
        <h1 className="bg-zinc-900/60 w-screen py-4 text-yellow-400 text-5xl">Page Not Found</h1>
        <h1 className="bg-zinc-900/60 w-screen pb-2 text-yellow-500 text-3xl">I'll send you back in:</h1>
        <h1 className="bg-zinc-900/60 w-screen pb-10 text-yellow-500 text-3xl">
          {counter} {counter > 1 ? " seconds" : " second"}
        </h1>
      </div>
    </div>
  );
}
