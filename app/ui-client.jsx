import { Add } from "./ui.jsx"
import { useHolyContext, usePrayerContext } from "./hooks.js"
import {useRef} from 'react'

export function Prayer ({children, to, title}) {
  const {next, currentState, show, header} = usePrayerContext()
  const ref = useRef(null)
  const identifier = `${to}-${header}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = show(to)

  const setAndClose =() => {
    next()
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col gap-4">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${currentState[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black text-base text-left  underline underline-offset-2 rounded-r-lg hover:opacity-75 focus:outline-none ${isShown? " bg-gray-800/90 text-white/90  " : "" } `}>
        {currentState[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity={isShown?".77":".33"} fill={isShown?"#ffffff" : "#434343"}><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}


export function Steps({children}) {
  const {header} = usePrayerContext()
  return <section className="col-span-3 grid grid-cols-3 gap-4">

    <div className="col-span-3  text-sm text-white/70 font-extrabold text-center bg-gray-800">
      <div className=" h-10 flex items-center justify-center">{header} </div>
    </div>

    <div className="col-span-2 grid gap-2 ">
      {children}
    </div>

    <div className="col-span-1 grid ">

    </div>

  </section>

}

