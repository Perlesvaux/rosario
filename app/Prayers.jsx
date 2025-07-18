'use client'
import { useState, useEffect } from 'react'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'

import {useReducer} from 'react'

const all_prayers = {
  padrenuestro: false,
  avemaria: false,
  gloria: false,
  jaculatorias: false,
  cuenta: 0,
}

const reducer = (state, action) => {

  const { prayer, type } = action;

  switch (type) {
    case "done":
    return {...state, [prayer]:true}

    case "increase": {
      const count = state.cuenta + 1
      const status = (count<10) ? false : true
      return {...state, avemaria:status, cuenta:count}
    }
    

    default:
    return `undefined case: ${type}`

  }


}

export default function Prayers() {
  const [state, set] = useReducer(reducer, all_prayers)
  
  const markComplete = (e) => {
    console.log(e.currentTarget.name)
    set({type:"done", prayer:e.currentTarget.name}) 
  }

  const advance = () => {
    set({type:"increase"})
  }


  return (
    <div className="flex flex-col items-center gap-2 relative">

      <Prayer getter={state} setter={markComplete} title="Padre Nuestro" > 
        <Titulus>Padre Nuestro</Titulus>
        <Vox lider={ padreNuestro.l } respuesta={ padreNuestro.r } />
      </Prayer>

      <Prayer getter={state} title="Ave Maria">
        <Titulus>Ave María (x10)</Titulus>
        <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
        <Beads getter={state} setter={advance} />
      </Prayer>
        <Beads getter={state} setter={advance} />
      
      <Prayer getter={state} setter={markComplete} title="Gloria">
        <Titulus>Gloria</Titulus>
        <Vox lider={ gloria.l } respuesta={ gloria.r } />
      </Prayer>

      <Prayer getter={state} setter={markComplete} title="Jaculatorias">
        <Titulus>Jaculatorias</Titulus>
        <Vox lider={jaculatoria_1.l}  respuesta={jaculatoria_1.r} />
        <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
      </Prayer>

    </div>
  )
}


function Prayer ({children, getter, setter, title}) {
  const to = title.toLowerCase().replace(/\s+/g, "")

  return <article className="">
      <div popover="auto" id={to} className="border p-4 rounded shadow">
        {children}
        { setter && <button onClick={setter} name={to}> mark complete </button>  }
      </div>

      <button popoverTarget={to} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        {getter[to]? "done" : title}
      </button>

      {setter && <button onClick={setter} name={to}> {getter[to]? "done!": "mark complete"} </button> }

    </article>

}
       
function Beads ({getter, setter}){

    return <div className="flex flex-col items-center gap-2">

        
        {getter.cuenta<10? <button 
            className={`bg-gray-800 px-4 py-2 text-white rounded hover:bg-blue-500 transition`}
            onClick={setter}
          > faltan {10-getter.cuenta} </button>
          :
          <button 
            className={`bg-rose-700 px-4 py-2 text-white rounded transition`}
            onClick={setter}
          > Completado </button>

        }



    </div>

}
//export default function Prayers() {
//  const [index, setIndex] = useState(0)
//
//
//
//  const prev = () => setIndex(i => (i - 1 + prayers.length) % prayers.length)
//  const next = () => setIndex(i => (i + 1) % prayers.length)
//
//  return (
//    <div className="flex flex-col items-center gap-2 relative">
//
//    <article className="h-[30vh] overflow-hidden">
//        { prayers[index] }
//    </article>
//
//
//
//      <div key={index} className="flex gap-2 absolute bottom-2 right-1">
//        { index!==prayers.length-1 && <>
//            <button onClick={next} className="px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300">
//              <img src="/right.svg"/>
//            </button>
//          </>
//        }
//      </div>
//    </div>
//  )
//}
