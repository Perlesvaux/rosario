// Carousel.jsx
'use client'
import { useState } from 'react'
import Mystery from './Mystery.jsx'

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
  const next = () => setIndex(i => (i + 1) % items.length)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-4 border rounded w-full">

      <Mystery misterio={items[index]} />





      </div>
      <div className="flex gap-2">
        <button onClick={prev} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Prev</button>
        <button onClick={next} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500 transition">Next</button>
      </div>
    </div>
  )
}

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

