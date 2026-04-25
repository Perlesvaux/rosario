import Beads from './Beads.jsx'
import { memo } from 'react';
import { padreEterno, dolorosaPasion } from '../hooks'
import { Dialogus, Vox, Mysterium, Titulus, Slide, Frame } from './ui.jsx' 
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext, useCoronillaMisericordiaStateOfEach } from '../hooks'

function CoronillaPrayers({misterio, index}) {

  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOfEach("mysteries",index)

  return ( <PrayerContext.Provider value={{header:misterio.encabezado, next, currentState, show}}>
    <Slide>

      <Frame
        src={misterio.imagen}
        alt={misterio.titulo}
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Padre Eterno ..." to="padreeterno" > 
          <Dialogus
            titulo="*"
            lider={ padreEterno.l } 
            respuesta={ padreEterno.r } 
          />
        </Prayer>

        <Beads>
          <Dialogus
            titulo="Por su dolorosa pasión... (x10)"
            lider={ dolorosaPasion.l } 
            respuesta={ dolorosaPasion.r }
          />
        </Beads>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

export default memo(CoronillaPrayers)



