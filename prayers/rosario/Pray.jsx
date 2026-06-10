import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from './morphe/state'
import { RenderPrayer } from '@/oratio'

function Pray ({header, src, section }) {

  const {choice} = useHolyContext()

  const {show, currentState, next, prev, markPrayer} = useRosarioState( choice, section)

  const condition = typeof currentState !== "undefined"
  if (!condition) return

  // {next, currentState, markPrayer, show, header} = usePrayerContext() uses these 
  return ( <PrayerContext.Provider value={{header, next, currentState, show, markPrayer}}>
    <Slide>

      <Frame
        src={src}
        alt={header}
        advance={next}
        retrocede={prev}
      />

      <Steps>
        <RenderPrayer />
      </Steps>

    </Slide>

  </PrayerContext.Provider>)
}
export default memo(Pray)

