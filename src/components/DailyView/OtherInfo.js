import { RiWindyFill } from 'react-icons/ri';
import { GiOppression, GiHeraldicSun, GiHeavyRain } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';

export default function OtherInfo({ hour }) {
  const { conversion } = useContext(DataContext);
  const kphWind = hour?.wind_kph;
  const mphWind = hour?.wind_mph;

  const infos = [
    {
      id: 1,
      icon: <RiWindyFill style={{ width: "2rem", height: "2rem", marginRight: "10px", color: "seagreen" }} />,
      text: 'Wind Speed',
      data: conversion ? kphWind : mphWind,
      unit: conversion ? 'km/h' : 'mph'
    },
    {
      id: 2,
      icon: <GiOppression style={{ width: "2rem", height: "2rem", marginRight: "10px", color: "yellow" }} />,
      text: 'Pressure',
      data: hour?.pressure_mb,
      unit: 'mb'
    },
    {
      id: 3,
      icon: <WiHumidity style={{ width: "2rem", height: "2rem", marginRight: "10px", color: "steelblue" }} />,
      text: 'Humidity',
      data: hour?.humidity,
      unit: '%'
    },
    {
      id: 4,
      icon: <GiHeraldicSun style={{ width: "2rem", height: "2rem", marginRight: "10px", color: "orange" }} />,
      text: 'UV Index',
      data: hour?.uv,
      unit: '/ 10'
    },
    {
      id: 5,
      icon: <GiHeavyRain style={{ width: "2rem", height: "2rem", marginRight: "10px", color: "mediumpurple" }} />,
      text: 'Rain chance',
      data: hour?.chance_of_rain,
      unit: '%'
    },
  ]

  return (
    <div className="flex flex-col md:flex-row flex-wrap">

      {infos.map((info) => (
        <div key={info.id} className="flex flex-col flex-1 m-1 py-2 text-sm border-1 border-white/50 bg-zinc-900/80 rounded">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              {info.icon}
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-row">
                {info.text}
              </div>
              <div className="flex-row">
                {info.data} {info.unit}
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
