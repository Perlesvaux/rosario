"use client"
import { Add } from "./ui.jsx"
import { useHolyContext } from "./hooks.js"

import {useRef} from 'react'

export function MysteryPrayer ({children, to, title}) {
  const {state, singlePress, header} = useHolyContext()
  const ref = useRef(null)
  const identifier = `${header}-${to}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "misterio" && state.actual == 0) isShown = true
  if (to === "padrenuestro" && state.actual == 1) isShown = true
  if (to === "gloria" && state.actual == 12) isShown = true
  if (to === "jaculatorias" && state.actual == 13) isShown = true

  const setAndClose =() => {
    singlePress(); 
    ref.current.hidePopover();
  }

  return <>
    <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
      <article className="flex flex-col">
        {children}
        { isShown && <Add onClick={setAndClose} name={identifier} /> }
      </article>
    </div>

    <button popoverTarget={identifier} className={`${state[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
      {state[to]
      ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
      : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
      {title}
    </button>
  </>

}



export function IntroPrayer ({children, to, title}) {
  const {state, advance, index} = useHolyContext()
  const ref = useRef(null)
  const identifier = `intro-${to}`

  const intro = state.intro

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "senal" && intro.actual == 0) isShown = true
  if (to === "invocacion" && intro.actual == 1) isShown = true
  if (to === "contricion" && intro.actual == 2) isShown = true
  if (to === "credo" && intro.actual == 3) isShown = true
  if (to === "peticiones" && intro.actual == 4) isShown = true

  const setAndClose =() => {
    advance(index); 
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${intro[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {intro[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}



export function OutroPrayer ({children, to, title}) {
  const {state, advance, index} = useHolyContext()
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
    advance(index); 
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
  const {state, singlePress, goBack, prev, next, header} = useHolyContext()
  return <section className="col-span-3 grid grid-cols-3 gap-4">

    <div className="col-span-3 grid grid-cols-7 text-xs text-white/70 text-center bg-gray-800">
      <Left onClick={prev}/>
      <div className="col-span-5 h-10 flex items-center justify-center">{header} </div>
      <Right onClick={next}/>
    </div>

    <div className="col-span-2 grid gap-2 ">
      {children}
    </div>

    <div className="col-span-1 grid ">
      <Up onClick={goBack} />
      <Down onClick={singlePress} />
    </div>

  </section>

}



export function LitanyPrayer ({children, to, title}) {
  const {state, singlePress} = useHolyContext()
  const ref = useRef(null)
  const identifier = `outro-${to}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "inicio" && state.actual == 0 ) isShown = true 
  if (to === "letanias" && state.actual == 1) isShown = true
  if (to === "oremos" && state.actual == 2) isShown = true
  if (to === "avemariapurisima" && state.actual == 3) isShown = true
  if (to === "final" && state.actual == 4) isShown = true

  const setAndClose =() => {
    singlePress(); 
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${state[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {state[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}
