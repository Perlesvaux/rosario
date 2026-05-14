import { memo } from 'react';
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, jaculatorias_finales} from '../../oracionesComunes'
import { Dialogus, Introductio, Slide, Frame, Vox, Prayer, Steps } from '@/components' 
import {useHolyContext, PrayerContext} from '../../../hooks'
import outroImg from '@/public/outro.webp'
import { useRosarioStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio';

function Outro ({header}){

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useRosarioStateOf("outro")

  return ( <PrayerContext.Provider value={{header:`${header} - Oraciones Finales`, next, currentState, show, isSimple}}>
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


