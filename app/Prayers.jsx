'use client'
import { useState, useEffect } from 'react'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import {useReducer, useRef} from 'react'

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

    case "increase": {
      const count = state.cuenta + 1
      const status = (count<10) ? false : true
      return {...state, avemaria:status, cuenta:count}
    }

    case "next":{
      const actual = state.actual +1;

      

    return {...state, actual: actual}
    }


    default:
    return `undefined case: ${type}`

  }
}

export default function Prayers({misterio, index}) {
  const [state, set] = useReducer(reducer, all_prayers)
  
  const markComplete = (e) => {
    set({type:"done", prayer:e.currentTarget.name}) 
  }

  const advance = () => {
    set({type:"increase"})
  }

  const singlePress = () => {
    const {misterio, padrenuestro, avemaria, gloria, jaculatorias} = state

    set({type:"next"})
    if (state.actual === 0)  set({type:"done", prayer:"misterio"})
    if (state.actual === 1)  set({type:"done", prayer:"padrenuestro"})
    if ( state.actual >1 && state.actual <= 11)  set({type:"increase"})
    if (state.actual === 12) set({type:"done", prayer:"gloria"})
    if (state.actual === 13) set({type:"done", prayer:"jaculatorias"})
    


    

  }




  return (
    <div className="flex flex-col gap-1 relative">
      <button onClick={singlePress}> next </button>

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

        <Prayer getter={state} rosary={singlePress} title="Ave Maria" index={index}>
          <Titulus>Ave María (x10)</Titulus>
          <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
        </Prayer>
      
      <Prayer getter={state} setter={singlePress} title="Gloria" index={index}>
        <Titulus>Gloria</Titulus>
        <Vox lider={ gloria.l } respuesta={ gloria.r } />
      </Prayer>

      <Prayer getter={state} setter={singlePress} title="Jaculatorias" index={index}>
        <Titulus>Jaculatorias</Titulus>
        <Vox lider={jaculatoria_1.l}  respuesta={jaculatoria_1.r} />
        <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
      </Prayer>

    </div>
  )
}


function Prayer ({children, getter, setter, title, rosary, index}) {
  const ref = useRef(null)
  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']
  const to = title.toLowerCase().replace(/\s+/g, "")

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (to === "misterio" && getter.actual == 0) isShown = true
  if (to === "padrenuestro" && getter.actual == 1) isShown = true
  if (to === "avemaria" && getter.actual >1 && getter.actual <= 11) isShown = true
  if (to === "gloria" && getter.actual == 12) isShown = true
  if (to === "jaculatorias" && getter.actual == 13) isShown = true

console.log(`is shown ${isShown} actual = ${getter.actual} misterio = ${to}`)

  const setAndClose =() => {
    setter(); 



    ref.current.hidePopover();
  }

  const setAndCloseRosary =() => {
    rosary(); 
    
    console.log(getter)

    
    if (getter.actual == 11) ref.current.hidePopover();
  }

  return <article className="">



      <div ref={ref} popover="auto" id={to} className={ `${bgColors[index]}  px-4 py-2 text-rose-800  overflow-hidden w-full border p-4 rounded shadow` }>
        <article className="flex flex-col">
          {children}
        { isShown && setter && <>
          { getter[to]? 
            <></>
            : 
            <button onClick={setAndClose} name={to} className="mt-4 px-4 py-2 col-span-1 bg-gray-600 text-white rounded text-sm">
              <img className="mx-auto" src="/cross.svg" />
            </button> 
        } </>}

        { rosary && isShown &&  <Beads getter={getter} setter={setAndCloseRosary} /> }
        </article>
      </div>




      <div className="grid grid-cols-3 gap-2 w-full max-w-md mx-auto">

        <button popoverTarget={to} className={`mt-4 px-4 py-2 col-span-2 text-black rounded text-base text-left text-sm underline underline-offset-2 px-2 py-1 rounded hover:opacity-75 focus:outline-none`}>
          <img className="inline pr-1" src='/title.svg'/>{title}
        </button>

        { setter && <>
          {getter[to]? 
            <button onClick={setter} name={to} className="mt-4 px-4 py-2 col-span-1 bg-teal-600 text-white rounded text-sm">
              <img className="mx-auto" src="/check.svg" />
            </button>
            : 
            <button onClick={setter} name={to} className="mt-4 px-4 py-2 col-span-1 bg-gray-600 text-white rounded text-sm">
              <img className="mx-auto" src="/cross.svg" />
            </button> 
        } </>}

        { rosary &&  <Beads getter={getter} setter={rosary} /> }
        
      </div>

    </article>

}
       
function Beads ({getter, setter}){

  const icon = () => {
    switch (getter.cuenta) {

      case 0:
        return '/counter_0.svg'

      case 1:
        return '/counter_1.svg'

      case 2:
        return '/counter_2.svg'

      case 3:
        return '/counter_3.svg'

      case 4:
        return '/counter_4.svg'

      case 5:
        return '/counter_5.svg'

      case 6:
        return '/counter_6.svg'

      case 7:
        return '/counter_7.svg'

      case 8:
        return '/counter_8.svg'

      case 9:
        return '/counter_9.svg'

      default:
        return '/love.svg'
    }
  }




    return <button 
      className={` ${getter.cuenta>=10? 'bg-rose-700 ':'bg-gray-800'}  mt-4 px-4 py-2 col-span-1 text-white rounded hover:bg-blue-500 transition`}
      onClick={setter}
      > 
        <img className="px-4 py-2 rounded transition mx-auto" src={icon()}/> 
    </button>
    

}
