import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '.'
import { RenderPrayer } from '@/oratio'

function Pray ({header, src, section, misterio, index=null }) {

  const {choice} = useHolyContext()

  const h = (index===null) ?  header : misterio.encabezado

  const {show, currentState, next, prev, markPrayer} = index===null
    ? useRosarioState( choice, section ) 
    : useRosarioState(choice, section, index)

  const condition = typeof currentState !== "undefined"
  if (!condition) return

  // {next, currentState, markPrayer, show, header} = usePrayerContext() uses these 
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

