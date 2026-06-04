import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio';
import litanyImg from '@/public/litany.webp'


function Litany ({header}){

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev, markPrayer} = useRosarioStateOf(isSimple? "simple":"complete","litany")

  return ( <PrayerContext.Provider value={{header:`${header} - Letanías Lauretanas`, next, currentState, show, isSimple, markPrayer}}>


    {
      !isSimple && <Slide> 

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

    }
  </PrayerContext.Provider>)
}

export default memo(Litany)
