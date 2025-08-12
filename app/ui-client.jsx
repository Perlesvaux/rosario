import { Add } from "./ui.jsx"
import { useHolyContext, usePrayerContext } from "./hooks.js"
import {useRef} from 'react'

export function Prayer ({children, to, title}) {
  const {next, currentState, show, header, index} = usePrayerContext()
  const ref = useRef(null)
  const identifier = `${to}-${header}-${index}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = show(to)

  const setAndClose =() => {
    next()
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${currentState[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {currentState[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}


export function Steps({children}) {
  const {header} = usePrayerContext()
  return <section className="col-span-3 grid grid-cols-3 gap-4">

    <div className="col-span-3 grid grid-cols-7 text-xs text-white/70 text-center bg-gray-800">
      <div className="col-span-1"></div>
      <div className="col-span-5 h-10 flex items-center justify-center">{header} </div>
      <div className="col-span-1"></div>
    </div>

    <div className="col-span-2 grid gap-2 ">
      {children}
    </div>

    <div className="col-span-1 grid ">

    </div>

  </section>

}

