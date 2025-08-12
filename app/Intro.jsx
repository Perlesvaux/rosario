import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, List } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext } from './hooks.js'
import introImg from '../public/intro.webp'

export default function Intro ({header}) {

  const {state, dispatch} = useHolyContext();
  const next = ()=>{ dispatch({type: "advance intro" }) }
  const prev = ()=>{ dispatch({type: "previous intro" }) }
  const currentState = state.intro;

  const show = (to) =>  {
    if (to === "senal" && currentState.actual == 0) return true
    if (to === "invocacion" && currentState.actual == 1) return true
    if (to === "contricion" && currentState.actual == 2) return true
    if (to === "credo" && currentState.actual == 3) return true
    if (to === "peticiones" && currentState.actual == 4) return true
  }

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
