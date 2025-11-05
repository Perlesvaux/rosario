import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, Titulus } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext, useShowIntro } from './hooks.js'
import introImg from '../public/intro.webp'

export default function Intro ({header}) {

  const {show, currentState, next, prev} = useShowIntro()

  return ( <PrayerContext.Provider value={{header, next, currentState, show}}>
    <Slide>

      <Frame
        src={introImg}
        alt="Oh señor. Envia tu Espiritu."
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Señal de la Cruz" to="senal">
          <Introductio 
            titulo="Señal de la Cruz"
            leyenda={senal}
          /> 
        </Prayer>

        <Prayer title="Invocación" to="invocacion">
          <Introductio
            titulo="Invocación del Espiritu Santo"
            leyenda={invocacion}
          />
        </Prayer>

        <Prayer title="Acto de Contrición" to="contricion" >
          <Introductio
            titulo="Acto de Contrición"
            leyenda={contricion}
          />
        </Prayer>

        <Prayer title="Credo de los Apóstoles" to="credo" >
        <Introductio
          titulo="Credo de los Apóstoles"
          leyenda={credo}
        />
        </Prayer>

        <Prayer title="Peticiones" to="peticiones" >
          <Introductio 
            titulo="Peticiones"
            leyenda="Agradecimiento y peticiones, incluyendo por las almas del purgatorio."
          />
        </Prayer>
      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
