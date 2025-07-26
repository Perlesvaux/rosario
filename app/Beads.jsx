'use client'
import { useState, useRef } from 'react'

export default function Beads ({children, getter, setter, index}) {
  const ref = useRef(null)
  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']
  const identifier = `avemaria-${index}`

  const pending = "bg-gray-600"
  const clear = "bg-teal-600"

  let isShown = false
  if (getter.actual > 1 && getter.actual <= 11) isShown = true

  console.log(`is shown ${isShown} actual = ${getter.actual} ROSARY`)

  const setAndCloseRosary =() => {
    setter()
    console.log(getter)
    if (getter.actual == 11) ref.current.hidePopover();
  }

  return <article className="">

      <div ref={ref} popover="auto" id={identifier} className={ `${bgColors[index]}  px-4 py-2 text-rose-800  overflow-hidden w-full border p-4 rounded shadow` }>
        <article className="flex flex-col">
          {children}
          { isShown && <Bead getter={getter} setter={setAndCloseRosary} /> }
        </article>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-md mx-auto">
        <button popoverTarget={identifier} className={`mt-4 px-4 py-2 col-span-2 text-black rounded text-base text-left text-sm underline underline-offset-2 px-2 py-1 rounded hover:opacity-75 focus:outline-none`}>
          <img className="inline pr-1" src='/title.svg'/>Ave Maria
        </button>
        <Bead getter={getter} setter={setter} />
      </div>

    </article>

}


//<Beads getter={state} setter={singlePress} index={index}>
//  <Titulus>Ave María (x10)</Titulus>
//  <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
//</Beads>





function Bead ({getter, setter}){

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
    onClick={setter}
    className={`${getter.cuenta>=10? 'bg-rose-700 ':'bg-gray-800'} mt-4 px-4 py-2 col-span-1 text-white rounded hover:bg-blue-500 transition`}
    > 
      <img className="px-4 py-2 rounded transition mx-auto" src={icon()}/> 
  </button>
    

}





