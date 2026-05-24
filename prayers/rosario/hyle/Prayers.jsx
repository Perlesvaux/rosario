import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components' 
import { RenderPrayer } from '@/oratio'
import { useHolyContext, PrayerContext } from '@/hooks'
import { useRosarioStateOfEach } from '../morphe/state'

function Prayers({misterio, index}) {

  const { isSimple } = useHolyContext()

  const { show, currentState, next, prev } = useRosarioStateOfEach("mysteries",index)

  return ( <PrayerContext.Provider value={{header:misterio.encabezado, next, currentState, show, isSimple, misterio}}>

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

