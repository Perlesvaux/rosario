import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioStateOf } from '../morphe/state'
import { RenderPrayer } from '@/oratio'
import introImg from '@/public/intro.webp'

function Intro ({header}) {

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev, markPrayer} = useRosarioStateOf( isSimple? "simple":"complete" ,"intro")

  return ( <PrayerContext.Provider value={{header, next, currentState, show, isSimple, markPrayer}}>

    <Slide>

      <Frame
        src={introImg}
        alt="Oh señor. Envia tu Espiritu."
        advance={next}
        retrocede={prev}
      />

      <Steps>
        <RenderPrayer />
      </Steps>

    </Slide>

  </PrayerContext.Provider>)
}
export default memo(Intro)

