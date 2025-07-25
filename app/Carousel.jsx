'use client'
import { useState } from 'react'
import { Mysterium } from './ui.jsx'
import Image from "next/image";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
  const next = () => setIndex(i => (i + 1) % items.length)

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-lg">

      <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden">
        <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${index*100}%)`}}>

          {items.map((item, indx)=><Mysterium key={indx} misterio={item} index={indx} />)}

        </div>
        <div className="flex gap-2 absolute top-40 right-1 mx-auto">
          <button onClick={next} className="px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300"><img src="/right-clear.svg"/></button>
        </div>
      </div>
      </div>
    </div>
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

