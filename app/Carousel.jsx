'use client'
import Rezo from './Rezo.jsx'
import Rosario from './Rosario.jsx'
import { Menu } from './ui-client.jsx'
import {HolyContext, useRosario, useTitle, useToggleSimple, useRoute, useCoronillaMisericordia  } from '../hooks'
import CoronillaMisericordia from './CoronillaMisericordia.jsx'

export default function Carousel() {
  const { state, dispatch } = useRosario() //HYLE
  const { coronillaMisericordiaState, coronillaMisericordiaDispatch } = useCoronillaMisericordia() //HYLE

  const {name, items, select, backToSquareOne, ref, isReady} = useRoute() //MORPHE

  const {isSimple, toggle} = useToggleSimple()


  useTitle(name)

  return (<HolyContext.Provider value={{ state, dispatch, select, backToSquareOne, name, items, isReady, isSimple, toggle, coronillaMisericordiaState, coronillaMisericordiaDispatch }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">

        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">

          <div ref={ref} className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">

            <Rezo>

              <Rosario />
              <CoronillaMisericordia />



            </Rezo>

          </div>

          <Menu />
        </div>
      </div>
    </div>
  </HolyContext.Provider>
  )
}

