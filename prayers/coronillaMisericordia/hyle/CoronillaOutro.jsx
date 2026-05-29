import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components' 
import { PrayerContext } from '@/hooks'
import { useCoronillaMisericordiaStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio'
import outroImg from '@/public/outro.webp'

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



