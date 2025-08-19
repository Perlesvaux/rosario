'use client'
import Prayers from './Prayers.jsx'
import Intro from './Intro.jsx'
import Outro from './Outro.jsx'
import Litany from './Litany.jsx'
import { Help } from './ui-client.jsx'
import { HolyContext, useAll } from './hooks.js'

export default function Carousel({ items, name }) {
  const { state, dispatch } = useAll()

  return (<HolyContext.Provider value={{ state, dispatch }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">

        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">

          <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            <Intro header={name} />
            {items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
            <Outro />
            <Litany />
          </div>
            
          <Help />
        </div>
      </div>
    </div>
  </HolyContext.Provider>
  )
}

