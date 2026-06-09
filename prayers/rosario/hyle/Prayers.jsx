import { memo } from 'react';
import { Slide, Frame, Steps } from '@/components' 
import { useHolyContext, PrayerContext } from '@/hooks'
//import { useRosarioStateOfEach } from '../morphe/state'
import { useRosarioState } from '../morphe/state'
import { RenderPrayer } from '@/oratio'

function Prayers({misterio, index}) {

  const { isSimple, choice } = useHolyContext()

  //const { choice } = useHolyContext()

  console.log(`${choice()} actual`)
  //const { show, currentState, next, prev, markPrayer } = useRosarioState(isSimple? "simple":"complete", "mysteries",index)
  const { show, currentState, next, prev, markPrayer } = useRosarioState(choice(), "mysteries",index)

  //console.log(currentState)

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

