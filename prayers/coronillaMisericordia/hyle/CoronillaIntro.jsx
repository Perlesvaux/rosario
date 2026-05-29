import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components'
import { PrayerContext } from '@/hooks'
import { useCoronillaMisericordiaStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio'
import introImg from '@/public/intro.webp'

function CoronillaIntro ({header}) {

  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOf("intro")

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

