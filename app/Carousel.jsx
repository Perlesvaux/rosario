'use client'
import Prayers from './Prayers.jsx'
import Intro from './Intro.jsx'
import Outro from './Outro.jsx'
import Litany from './Litany.jsx'
import { Help, Menu } from './ui-client.jsx'
import { HolyContext, useAll, useRoute, useTitle
} from './hooks.js'

export default function Carousel() {
  const { state, dispatch } = useAll()

  const {name, items, select, backToSquareOne, ref, isReady} = useRoute()


  useTitle(name)

  return (<HolyContext.Provider value={{ state, dispatch, select, backToSquareOne }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">

        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">

          <div ref={ref} className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">

            {
              isReady
              ?
                <>
                  <Intro header={name} />
                  {items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
                  <Outro header={name} />
                  <Litany header={name}/>
                </>
              :
                <>
                  <div className="w-screen text-center"> Espere ... </div>
                </>


            
            }



          </div>
            
          <Menu />
        </div>
      </div>
    </div>
  </HolyContext.Provider>
  )
}

