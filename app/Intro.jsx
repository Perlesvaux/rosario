"use client"
import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, List } from './ui.jsx'
import { IntroPrayer, Steps } from './ui-client.jsx'
import { HolyContext, useIntro, useHolyContext } from './hooks.js'
import introImg from '../public/intro.webp'



export default function Intro ({header, prev, next}) {
  //const { state, singlePress, goBack } = useIntro()
  const { state, advance, goback } = useHolyContext()

  return <>
    <Slide>

      <Frame
        src={introImg}
        alt="Oh señor. Envia tu Espiritu."
      />

      <Steps>

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
  </>

}
