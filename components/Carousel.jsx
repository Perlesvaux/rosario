'use client'
import { Rezo, Menu, Rosario } from '.'
import {HolyContext, useTitle, useRoute} from '@/hooks'
import {useRosario} from '@/prayers'

export default function Carousel() {
  const { state, dispatch } = useRosario() 
  const {name, items, select, backToSquareOne, ref, isReady, choice, toggle, isSimple} = useRoute()
  useTitle(name)

  return (<HolyContext.Provider value={{ state, dispatch, select, backToSquareOne, name, items, isReady, isSimple, toggle, choice }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">
        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">
          <div ref={ref} className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            <Rezo>
              <Rosario />
            </Rezo>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  </HolyContext.Provider>
  )
}

