import { memo } from 'react';
import { senal, credo, aveMaria, padreNuestro, faustina } from '../../oracionesComunes'
import { Dialogus, Introductio, Slide, Frame,  Prayer, Steps  } from '../../../components'
import { useHolyContext, PrayerContext, 
} from '../../../hooks'

import { useCoronillaMisericordiaStateOf } from '../morphe/state'

import introImg from '../../../public/intro.webp'

import {RenderPrayer} from '@/oratio'

function CoronillaIntro ({header}) {

  //const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOf("intro")

  //const prev = () => { return }
  //const next = () => { return }
  return ( <PrayerContext.Provider value={{header, next, currentState, show}}>
    <Slide>

      <Frame
        src={introImg}
        alt="Coronilla de la divina misericordia - Intro"
        advance={next}
        retrocede={prev}
      />

      <Steps>
        <RenderPrayer />
      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
export default memo(CoronillaIntro)

