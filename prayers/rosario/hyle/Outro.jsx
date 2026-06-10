import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components' 
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '../morphe/state'
import { RenderPrayer } from '@/oratio';
import outroImg from '@/public/outro.webp'

function Outro ({header}){

  const {choice} = useHolyContext()
  const {show, currentState, next, prev, markPrayer} = useRosarioState(choice, "outro")

  //return ( <PrayerContext.Provider value={{header:`${header} - Oraciones Finales`, next, currentState, show, markPrayer}}>
  return ( <PrayerContext.Provider value={{header, next, currentState, show, markPrayer}}>
    <Slide> 

      <Frame 
        src={outroImg} 
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <RenderPrayer />

      </Steps>


    </Slide>
  </PrayerContext.Provider>)
}
export default memo(Outro)


