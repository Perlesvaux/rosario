'use client'
import { useState, useEffect } from 'react'
import { Dialogus, Vox, Mysterium, Titulus, Up, Down, Left, Right, Add, Slide, Frame, Steps } from './ui.jsx' 
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import { useReducer, useRef } from 'react'
import Beads from './Beads.jsx'
import Image from "next/image";

const all_prayers = {
  misterio: false,
  padrenuestro: false,
  avemaria: false,
  gloria: false,
  jaculatorias: false,
  cuenta: 0,
  actual: 0,
}

const reducer = (state, action) => {

  const { prayer, type, fun } = action;

  switch (type) {
    case "done":
    return {...state, [prayer]:true}
    
    case "pending":
    return {...state, [prayer]:false}

    case "increase": {
      const count =  state.cuenta + 1;
      const status = (count<10) ? false : true;
      return {...state, avemaria:status, cuenta:count}
    }

    case "decrease": {
      if (state.actual<2) return {...state, avemaria:false, count:0}
      const count =  state.cuenta - 1;
      const status = (count<10) ? false : true;
      return {...state, avemaria:status, cuenta:count}
    }

    case "next": {
      const actual = state.actual < 14 ? state.actual + 1 : 14;
      const updates = {
        1: { misterio: true },
        2: { padrenuestro: true },
        12: { avemaria: true },
        13: { gloria: true },
        14: { jaculatorias: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { misterio: false },
        1: { padrenuestro: false },
        11: { avemaria: false },
        12: { gloria: false },
        13: { jaculatorias: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    default:
    return `undefined case: ${type}`
  }
}

export default function Prayers({misterio, index, prev, next}) {
  const [state, set] = useReducer(reducer, all_prayers)
  
  const markComplete = (e) => {
    set({type:"done", prayer:e.currentTarget.name}) 
  }

  const advance = () => {
    set({type:"increase"})
  }

const singlePress = () => set({type: "next"})

  const goBack = () => set({type:"previous"})


  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']

  return (
    <Slide>

      <Frame>
        <Image
          className=""
          src={misterio.imagen}
          alt={misterio.titulo}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </Frame>

      <Steps header={misterio.encabezado} up={goBack} down={singlePress} left={prev} right={next} >

        <Prayer getter={state} setter={singlePress} title="Misterio" index={index} > 
          <article className="pb-4 pt-4">
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base font-bold">{misterio.titulo}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">Fruto del misterio: {misterio.fruto}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{misterio.leyenda}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{misterio.l}</div>
            <div className=" bg-red-50 border-l-4  border-red-400 px-4 py-1  text-red-800 text-sm md:text-base">{misterio.r}</div>
          </article>
        </Prayer>

        <Prayer getter={state} setter={singlePress} title="Padre Nuestro" index={index} > 
          <Titulus>Padre Nuestro</Titulus>
          <Vox lider={ padreNuestro.l } respuesta={ padreNuestro.r } />
        </Prayer>

        <Beads getter={state} setter={singlePress} index={index}>
          <Titulus>Ave María (x10)</Titulus>
          <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
        </Beads>

        <Prayer getter={state} setter={singlePress} title="Gloria" index={index}>
          <Titulus>Gloria</Titulus>
          <Vox lider={ gloria.l } respuesta={ gloria.r } />
        </Prayer>

        <Prayer getter={state} setter={singlePress} title="Jaculatorias" index={index}>
          <Titulus>Jaculatorias</Titulus>
          <Vox lider={jaculatoria_1.l} respuesta={jaculatoria_1.r} />
          <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
        </Prayer>

      </Steps>

    </Slide>
  )
}


function Prayer ({children, getter, setter, title, rosary, index}) {
  const ref = useRef(null)
  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']
  const to = title.toLowerCase().replace(/\s+/g, "")
  const identifier = `${to}-${index}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "misterio" && getter.actual == 0) isShown = true
  if (to === "padrenuestro" && getter.actual == 1) isShown = true
  //if (to === "avemaria" && getter.actual >1 && getter.actual <= 11) isShown = true
  if (to === "gloria" && getter.actual == 12) isShown = true
  if (to === "jaculatorias" && getter.actual == 13) isShown = true

  const setAndClose =() => {
    setter(); 

    ref.current.hidePopover();
  }

  return <>
      <div ref={ref} popover="auto" id={identifier} className={ `bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Add onClick={setAndClose} name={identifier} /> }
        </article>
      </div>

      <button popoverTarget={identifier} className={`${getter[to]? 'text-black/90' : 'text-gray-500/60'} px-4   text-black rounded text-xs text-left  underline underline-offset-2 rounded hover:opacity-75 focus:outline-none`}>
        {getter[to]
        ? <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
        : <svg className="inline pr-1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".33" fill="#434343"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>}
        {title}
      </button>
    </>

}
       
// deactivated right-handed button altogether
//
        //{ setter &&
        //  <button onClick={setter} name={identifier} className={`mt-4 px-4 py-2 col-span-1 bg-gray-700 text-white rounded text-sm transition duration-300 ${getter[to] ? "opacity-100" : "opacity-25"}`}>
        //    <img className="mx-auto" src="/check.svg" />
        //  </button>
        //}

        



//function Beads ({getter, setter}){
//
//  const icon = () => {
//    switch (getter.cuenta) {
//
//      case 0:
//        return '/counter_0.svg'
//
//      case 1:
//        return '/counter_1.svg'
//
//      case 2:
//        return '/counter_2.svg'
//
//      case 3:
//        return '/counter_3.svg'
//
//      case 4:
//        return '/counter_4.svg'
//
//      case 5:
//        return '/counter_5.svg'
//
//      case 6:
//        return '/counter_6.svg'
//
//      case 7:
//        return '/counter_7.svg'
//
//      case 8:
//        return '/counter_8.svg'
//
//      case 9:
//        return '/counter_9.svg'
//
//      default:
//        return '/love.svg'
//    }
//  }
//
//  return <button 
//    className={` ${getter.cuenta>=10? 'bg-rose-700 ':'bg-gray-800'}  mt-4 px-4 py-2 col-span-1 text-white rounded hover:bg-blue-500 transition`}
//    onClick={setter}
//    > 
//      <img className="px-4 py-2 rounded transition mx-auto" src={icon()}/> 
//  </button>
//
//
//}
