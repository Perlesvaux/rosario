'use client'
import { useRef } from 'react'
import { useHolyContext, usePrayerContext } from "./hooks.js"
import { Exit } from './ui.jsx'

export default function Beads ({children}) {
  const {next, currentState, show, header} = usePrayerContext()
  const ref = useRef(null)
  const identifier = `avemaria-${header}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = show("avemaria")

  const setAndCloseRosary =() => {
    next()
    if (currentState.actual == 11) ref.current.hidePopover();
  }

  return <>

    <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
      <article className="flex flex-col  gap-4">
        {children}
        { isShown && <Bead onClick={setAndCloseRosary} /> }
        <Exit onClick={()=> ref.current.hidePopover()}/>
      </article>
    </div>

    <button popoverTarget={identifier} className={` ${currentState.avemaria? 'text-black/90' : 'text-gray-500/60'}  px-4   text-black  text-base text-left  underline underline-offset-2  rounded-r-lg hover:opacity-75 focus:outline-none   ${isShown? " bg-gray-800/90 text-white/90 ": "" } `}>
        {currentState["avemaria"]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity={isShown?".77":".33"} fill={isShown?"#ffffff" : "#434343"}><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
      Ave Maria {isShown && <>→</>} <BeadCount count={currentState.actual}/>
    </button>

  </>

}


function Bead ({onClick}){
  //const { state } = useHolyContext()
  const { currentState } = usePrayerContext()
  return <button 
    onClick={onClick}
    className={`${currentState.actual>=11? 'bg-rose-700 ':'bg-gray-800'}  px-4 py-2 text-white rounded hover:bg-blue-500 transition flex items-center justify-center`}
    > 
     <BeadCount count={currentState.actual} />
  </button>
    

}


  const BeadCount = ({count}) => {
    if (count-2 < 0) return  
    if (count >= 12) return
    return <>  <strong className="font-bold">{ count-1 }</strong>/<span className="text-xs">10</span></>
  }


