'use client'
import { useState } from 'react'
import { Mysterium, Left, Up, Down, Right } from './ui.jsx'
import Image from "next/image";
import Prayers from './Prayers.jsx'
import Intro from './Intro.jsx'
import Outro from './Outro.jsx'
import Litany from './Litany.jsx'

import { HolyContext, useIntro, useAll } from './hooks.js'

export default function Carousel({ items, name }) {
  const [index, setIndex] = useState(0)
  //const { state, singlePress, goBack } = useIntro()
  //const { state, singlePress, goBack } = useAll()
  const { state, advance, retrocede } = useAll()

  //const len = items.length+6
  const len = items.length+3
  const prev = () => setIndex(i => (i - 1 + len) % len)
  const next = () => setIndex(i => (i + 1) % len)

  return (<HolyContext.Provider value={{ state, advance, index,  prev, next }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">

        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">
          <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${index*100}%)`}}>

            <Intro header={name} prev={prev} next={next} />
            {items.map((item, indx)=><Prayers key={indx} misterio={item} index={indx} prev={prev} next={next} />)}
            <Outro prev={prev} next={next} />
            <Litany prev={prev} next={next} />


          </div>
            <div className="absolute w-full z-20">
              <div className="relative w-full aspect-[812/899] flex ">
              <div className="w-1/2 " onDoubleClick={()=>retrocede(index)}></div>
              <div className="w-1/2 " onDoubleClick={()=>advance(index)}></div>
            </div>
              <div className="flex justify-between items-center h-[2.5em]"> 
                <Left onClick={ prev } />
                <Right onClick={ next } /> 
              </div>
            </div>
        </div>
      </div>
    </div></HolyContext.Provider>
  )
}


          //{['/gloriosos1.jpg', '/gozosos2.jpg', '/dolorosos5.jpg', '/luminosos3.jpg', '/gozosos4.jpg'].map((elem, indx)=>
          //  <div key={indx} className="w-full flex-shrink-0">
          //    <Image src={elem} width={350} height={400} alt="test" className="w-full object-contain" />
          //      <div>algo aqui</div>
          //      <div>algo aqui</div>
          //      <div>algo aqui</div>
          //  </div>
          //
          //  )}

          //{items.map((item, indx)=><Mysterium key={indx} misterio={item} index={indx} />)}
        //<button onClick={prev} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Prev</button>
        //<button onClick={next} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500 transition">Next</button>

//export default function Carousel({ items }) {
//  const [index, setIndex] = useState(0)
//
//  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
//  const next = () => setIndex(i => (i + 1) % items.length)
//
//  return (
//    <div className="flex flex-col items-center gap-2">
//      <div className="p-4 border rounded w-full text-center">
//        {items[index]}
//      </div>
//      <div className="flex gap-2">
//        <button onClick={prev} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Prev</button>
//        <button onClick={next} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500 transition">Next</button>
//      </div>
//    </div>
//  )
//}

