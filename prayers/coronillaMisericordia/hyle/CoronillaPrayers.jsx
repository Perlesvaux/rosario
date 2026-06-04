import { memo } from 'react';
import { Slide, Frame, Steps  } from '@/components' 
import { PrayerContext } from '@/hooks'
import { useCoronillaMisericordiaStateOfEach } from '../morphe/state'
import { RenderPrayer } from '@/oratio';

function CoronillaPrayers({misterio, index}) {

  const {show, currentState, next, prev, markPrayer} = useCoronillaMisericordiaStateOfEach("mysteries",index)

  return ( <PrayerContext.Provider value={{header:misterio.encabezado, next, currentState, show, markPrayer}}>
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

export default memo(CoronillaPrayers)



