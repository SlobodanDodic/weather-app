import daytime from '../../assets/daytime.png'
import night from '../../assets/night.png'

export default function SunMoonRise({ dailyData, hour }) {
  return (
    <div className="flex flex-col flex-1 m-1 py-1 border-1 border-white/50 bg-zinc-900/80 rounded justify-center">
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/3 items-center justify-center">
          {hour?.is_day ? <img className="h-20 w-20" src={daytime} alt="" /> : <img className="h-20 w-20" src={night} alt="" />}
        </div>
        <div className="flex flex-col basis-2/3 items-center justify-center pr-2">
          {hour?.is_day ? (
            <>
              <p className="text-sm py-1"><span>Sunrise at</span> <span className="text-amber-300">{dailyData?.astro?.sunrise}</span></p>
              <p className="text-sm py-1"><span>Sunset at</span> <span className="text-amber-300">{dailyData?.astro?.sunset}</span></p>
            </>
          ) : (
            <>
              <p className="text-sm py-1"><span>Moonrise at</span> <span className="text-slate-300">{dailyData?.astro?.moonrise}</span></p>
              <p className="text-sm py-1"><span>Moonset at</span> <span className="text-slate-300">{dailyData?.astro?.moonset}</span></p>
            </>
          )
          }
        </div>
      </div>
    </div>
  )
}
