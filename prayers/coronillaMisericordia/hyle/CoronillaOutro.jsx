import { memo } from 'react';
import { doxologiaFinal, oracionFinal } from '../../oracionesComunes'
import { Dialogus, Introductio, Extra, Facio, Susurri, Dictum, Slide, Frame, Vox , Prayer, Steps   } from '../../../components'
import {useHolyContext, PrayerContext } from '../../../hooks'
import outroImg from '../../../public/outro.webp'
import { useCoronillaMisericordiaStateOf } from '../morphe/state'

import {RenderPrayer} from '@/oratio'

function CoronillaOutro ({header}){

  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOf("outro")

  return ( <PrayerContext.Provider value={{header:`Oraciones Finales`, next, currentState, show}}>
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
export default memo(CoronillaOutro)



