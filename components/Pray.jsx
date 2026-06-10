import { memo } from 'react';
import { Slide, Frame, Steps  } from '.'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '@/prayers'
import { RenderPrayer } from '@/oratio'

function Pray ({header, src, section, misterio, index=null }) {

  const {choice} = useHolyContext()

  const h = (index===null) ?  header : misterio.encabezado

  const {show, currentState, next, prev, markPrayer} = index===null
    ? useRosarioState( choice, section ) 
    : useRosarioState(choice, section, index)

  const condition = typeof currentState !== "undefined"
  if (!condition) return

  return ( <PrayerContext.Provider value={{header:h, next, currentState, show, markPrayer, misterio}}>
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

