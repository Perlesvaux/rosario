'use client'
import { useState } from 'react'

export default function Beads({ items }) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  const advance = () => {
    setCount(prev => prev +1)
  }

  const prev = () => setIndex(i => (i - 1 + items.length) % items.length)
  const next = () => setIndex(i => (i + 1) % items.length)

  return (
    <div className="flex flex-col items-center gap-2">

        
        {count<10? <button 
            className={`bg-gray-800 px-4 py-2 text-white rounded hover:bg-blue-500 transition`}
            onClick={advance}
          > faltan {10-count} </button>
          :
          <button 
            className={`bg-rose-700 px-4 py-2 text-white rounded transition`}
            onClick={advance}
          > Completado </button>

        }



    </div>
  )
}

function Bead(){
  const [count, setCount] = useState(false)

  const advance = () => {
    setCount(true)
  }

  return <button 
    className={`${count?'bg-black':'bg-gray-800'} px-4 py-2 text-white rounded hover:bg-blue-500 transition`}
    onClick={advance}
  >
    o 
  </button>
}




