"use client"
import { Add } from "./ui.jsx"
import { useHolyContext, usePrayerContext } from "./hooks.js"

import {useRef} from 'react'

export function MysteryPrayer ({children, to, title}) {
  const {state, dispatch} = useHolyContext()
  const {header, index} = usePrayerContext()
  const ref = useRef(null)
  const identifier = `${header}-${to}`

  const mystery = state.mysteries[index]

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "misterio" && mystery.actual == 0) isShown = true
  if (to === "padrenuestro" && mystery.actual == 1) isShown = true
  if (to === "gloria" && mystery.actual == 12) isShown = true
  if (to === "jaculatorias" && mystery.actual == 13) isShown = true

  const setAndClose =() => {
    dispatch({type:"advance mystery", index}); 
    ref.current.hidePopover();
  }

  return <>
    <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
      <article className="flex flex-col">
        {children}
        { isShown && <Add onClick={setAndClose} name={identifier} /> }
      </article>
    </div>

    <button popoverTarget={identifier} className={`${mystery[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
      {mystery[to]
      ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
      : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
      {title}
    </button>
  </>

}



export function Prayer ({children, to, title}) {
  const {state, dispatch} = useHolyContext()
  const {next, currentState, show, header, index} = usePrayerContext()
  const ref = useRef(null)
  const identifier = `${to}-${header}-${index}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = show(to)

  const setAndClose =() => {
    //next()
    dispatch({type:next, index})
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



export function OutroPrayer ({children, to, title}) {
  const {state, dispatch} = useHolyContext()
  const ref = useRef(null)
  const identifier = `outro-${to}`

  const outro = state.outro

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "peticiones" && outro.actual == 0 ) isShown = true 
  if (to === "padrenuestro" && outro.actual == 1) isShown = true
  if (to === "fe" && outro.actual == 2) isShown = true
  if (to === "esperanza" && outro.actual ==3) isShown = true
  if (to === "caridad" && outro.actual ==4) isShown = true
  if (to === "gloria" && outro.actual == 5) isShown = true
  if (to === "salve" && outro.actual == 6) isShown = true

  const setAndClose =() => {
    dispatch({type:"advance outro"}); 
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${outro[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {outro[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}


import {Left, Right, Up, Down} from './ui.jsx'
export function Steps({children}) {
  //const {state, singlePress} = useHolyContext()
  const {state, singlePress, goBack, prev, next} = useHolyContext()
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

      //<Left onClick={prev}/>


      //<Up onClick={goBack} />
      //<Down onClick={singlePress} />


export function LitanyPrayer ({children, to, title}) {
  const {state, dispatch} = useHolyContext()
  const ref = useRef(null)
  const identifier = `outro-${to}`

  const litany = state.litany

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "inicio" && litany.actual == 0 ) isShown = true 
  if (to === "letanias" && litany.actual == 1) isShown = true
  if (to === "oremos" && litany.actual == 2) isShown = true
  if (to === "avemariapurisima" && litany.actual == 3) isShown = true
  if (to === "final" && litany.actual == 4) isShown = true

  const setAndClose =() => {
    dispatch({type:"advance litany"}); 
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${litany[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {litany[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}
