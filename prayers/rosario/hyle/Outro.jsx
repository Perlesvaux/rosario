import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components' 
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio';
import outroImg from '@/public/outro.webp'

function Outro ({header}){

  const {isSimple} = useHolyContext()

  //const {show, currentState, next, prev} = useRosarioStateOf("outro")
  const {show, currentState, next, prev, markPrayer} = useRosarioStateOf( isSimple? "simple":"complete" ,"outro")

  return ( <PrayerContext.Provider value={{header:`${header} - Oraciones Finales`, next, currentState, show, isSimple, markPrayer}}>
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


