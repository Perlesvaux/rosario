import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components' 
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioState } from '../morphe/state'
import { RenderPrayer } from '@/oratio'

function Prayers({misterio, index}) {

  const { isSimple, choice } = useHolyContext()

  const { show, currentState, next, prev, markPrayer } = useRosarioState(choice, "mysteries",index)

  //return ( <PrayerContext.Provider value={{header, next, currentState, show, markPrayer}}>
  return ( <PrayerContext.Provider value={{header:misterio.encabezado, next, currentState, show, isSimple, misterio, markPrayer}}>

    <Slide>

      <Frame
        src={misterio.imagen}
        alt={misterio.titulo}
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <RenderPrayer />

      </Steps>

    </Slide>

  </PrayerContext.Provider>)
}

export default memo(Prayers)

