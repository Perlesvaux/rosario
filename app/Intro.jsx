"use client"
import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, List, Steps } from './ui.jsx'
import { IntroPrayer } from './ui-client.jsx'
import { HolyContext, useIntro } from './hooks.js'



export default function Intro ({header, prev, next}) {
  const { state, singlePress, goBack } = useIntro()

  return <HolyContext.Provider value={{state, singlePress}}>
    <Slide>

      <Frame
        src="/intro.webp"
        alt="Oh señor. Envia tu Espiritu."
      />

      <Steps  up={goBack} down={singlePress} header={header} left={prev} right={next} >

        <IntroPrayer title="Señal de la Cruz" to="senal">
          <Introductio 
            titulo="Señal de la Cruz"
            leyenda={senal}
          /> 
        </IntroPrayer>

        <IntroPrayer title="Invocación del Espiritu Santo" to="invocacion">
          <Introductio
            titulo="Invocación del Espiritu Santo"
            leyenda={invocacion}
          />
        </IntroPrayer>

        <IntroPrayer title="Acto de Contrición" to="contricion" >
          <Introductio
            titulo="Acto de Contrición"
            leyenda={contricion}
          />
        </IntroPrayer>

        <IntroPrayer title="Credo de los Apóstoles" to="credo" >
        <Introductio
          titulo="Credo de los Apóstoles"
          leyenda={credo}
        />
        </IntroPrayer>

        <IntroPrayer title="Peticiones" to="peticiones" >
          <Introductio 
            titulo="Peticiones"
            leyenda="Agradecimiento y peticiones, incluyendo por las almas del purgatorio."
          />
        </IntroPrayer>
      </Steps>

    </Slide>
  </HolyContext.Provider>

}
