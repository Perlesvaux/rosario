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
          <Exit onClick={()=>ref.current.hidePopover()} />
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

import { Introductio, Exit } from './ui.jsx'

export function Help(){
  const ref = useRef(null)

  const close = () => {
    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id="help-section" className="bg-gray-300  px-4 py-2 text-gray-800  overflow-hidden w-full border rounded shadow">
        <article className="flex flex-col gap-4">
          
          <Introductio titulo="Ayuda">
            <div className="space-y-5  bg-gray-50 border-l-4 border-gray-400 px-4 py-2 text-gray-800 text-base md:text-base">
            <p>Por defecto, la aplicación se abre en el misterio del día.</p>
            <p>Desliza lateralmente para avanzar o retroceder.</p>
            <p><span className="text-gray-500/60 px-4 text-black text-base text-left underline underline-offset-2 rounded-r-lg hover:opacity-75 focus:outline-none bg-gray-800/90 text-white/90">Observa la sección</span> resaltada en negro. Haz click en ella para ver más <strong>detalles</strong> (verás una <strong>cruz que parpadea</strong>. Haz click en ella cuando termines)</p>
            <p>Atajos: Haz <strong>click en la mitad derecha de la imagen</strong> para continuar con el siguiente elemento en la lista; retrocede haciendo <strong>doble-click en la mitad izquierda de la imagen</strong></p>
            <p>Cuando sea el turno del <strong>Ave María</strong>, verás un <i>contador iniciado en cero</i>. Haz click en él cada vez que pronuncies <strong>Amén</strong>.</p>
            </div>
          </Introductio>

          <button onClick={close} name="help-section" className="py-2 col-span-1 bg-gray-800 text-white rounded text-sm">
            <svg className="mx-auto animate-pulse" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#F3F3F3"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </button>

          <Exit onClick={close} />

        </article>
      </div>

      <button popoverTarget="help-section" className="rounded-full h-6 w-6 bg-gray-900 text-white absolute right-5 bottom-10 hover:bg-gray-900/50">
        <svg xmlns="http://www.w3.org/2000/svg" opacity=".8" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f1f1f1"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </button>
    </>
}


