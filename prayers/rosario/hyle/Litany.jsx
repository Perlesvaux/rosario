import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '../morphe/state'
import { RenderPrayer } from '@/oratio';
import litanyImg from '@/public/litany.webp'


function Litany ({header}){

  const {choice, isSimple} = useHolyContext()
  const {show, currentState, next, prev, markPrayer} = useRosarioState(choice,"litany")
  const condition = !isSimple && typeof currentState !== "undefined"

  if (!condition) return
  return (<PrayerContext.Provider value={{header:`${header} - Letanías Lauretanas`, next, currentState, show, markPrayer}}>

    <Slide> 

      <Frame
        src={litanyImg}
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      <Steps>
        <RenderPrayer />
      </Steps>

    </Slide>

  </PrayerContext.Provider>
  )
}

export default memo(Litany)
