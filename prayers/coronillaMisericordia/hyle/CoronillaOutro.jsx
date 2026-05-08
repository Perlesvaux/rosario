import { memo } from 'react';
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales, doxologiaFinal, oracionFinal } from '../hooks'
import { Dialogus, Introductio, Extra, Facio, Susurri, Dictum, Slide, Frame, Vox   } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import {useHolyContext, PrayerContext, useCoronillaMisericordiaStateOf} from '../hooks'
import outroImg from '../public/outro.webp'

function CoronillaOutro ({header}){


  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOf("outro")

  return ( <PrayerContext.Provider value={{header:`Oraciones Finales`, next, currentState, show}}>
    <Slide> 

      <Frame 
        src={outroImg} 
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Doxología final" to="doxologiafinal">
          <Introductio
            titulo="Doxología final (x3)" 
            leyenda={doxologiaFinal}
          />
        </Prayer>

        <Prayer title="Final" to="oracionfinal">
          <Introductio
            titulo="Oracion Final" 
            leyenda={oracionFinal}
          />
        </Prayer>

      </Steps>


    </Slide>
  </PrayerContext.Provider>)
}
export default memo(CoronillaOutro)



