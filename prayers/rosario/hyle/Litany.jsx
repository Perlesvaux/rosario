import { memo } from 'react';
import { letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from '../../oracionesComunes'
import { Dialogus, Vox, Introductio, Dictum, Slide, Frame, 
Prayer, Steps 
} from '../../../components'

import { useHolyContext, PrayerContext } from '../../../hooks'
import { useRosarioStateOf } from '../morphe/state'
import litanyImg from '../../../public/litany.webp'

import { RenderPrayer } from '@/oratio';

function Litany ({header}){

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useRosarioStateOf("litany")
  console.log(currentState)

  return ( <PrayerContext.Provider value={{header:`${header} - Letanías Lauretanas`, next, currentState, show, isSimple}}>


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
