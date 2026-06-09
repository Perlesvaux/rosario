import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '../morphe/state'
import { RenderPrayer } from '@/oratio'
import introImg from '@/public/intro.webp'

function Intro ({header}) {

  const {choice} = useHolyContext()

  const {show, currentState, next, prev, markPrayer} = useRosarioState( choice ,"intro")

  // {next, currentState, markPrayer, show, header} = usePrayerContext() uses these 
  return ( <PrayerContext.Provider value={{header, next, currentState, show, markPrayer}}>

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

