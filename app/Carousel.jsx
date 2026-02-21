'use client'
import Prayers, {SimplePrayers} from './Prayers.jsx'
import Intro, {SimpleIntro} from './Intro.jsx'
import Outro, {SimpleOutro} from './Outro.jsx'
import Litany from './Litany.jsx'
import { Help, Menu } from './ui-client.jsx'
import { HolyContext, useAll, useSimple, useRoute, useTitle, useToggleSimple
} from './hooks.js'
import { Slide, Frame } from './ui.jsx'
import introImg from '../public/intro.webp'

export default function Carousel() {
  const { state, dispatch } = useAll()
  const { simpleState, simpleDispatch } = useSimple()

  const {name, items, select, backToSquareOne, ref, isReady} = useRoute()

  const {isSimple, toggle} = useToggleSimple()


  useTitle(name)

  return (<HolyContext.Provider value={{ state, dispatch, simpleState, simpleDispatch, select, backToSquareOne, isSimple, toggle }}>
    <div className="flex justify-center items-center">
      <div className="max-w-lg">

        <div className="flex flex-col items-center gap-2 w-full relative overflow-hidden h-[100svh] w-[100svw] bg-gray-300">

          <div ref={ref} className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">

            {
              isReady
                ?
                <>
                  {
                    isSimple
                      ?  
                      <>
                        <SimpleIntro header={name} />
                        {items.map((item, indx) => <SimplePrayers key={indx} misterio={item} index={indx} />)}
                        <SimpleOutro header={name} />
                      </>
                      :
                      <>
                        <Intro header={name} />
                        {items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
                        <Outro header={name} />
                        <Litany header={name}/>
                      </>
                  }
                </>
                :
                <>
                  <Slide>
                    <Frame
                      src={introImg}
                      alt="Bienvenido!"
                    />
                  </Slide>
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

