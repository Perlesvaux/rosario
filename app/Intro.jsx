"use client"
import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, List, Steps } from './ui.jsx'
import { IntroPrayer } from './ui-client.jsx'
import { useReducer } from 'react'
import Image from "next/image";

const intro = {
  senal: false,
  invocacion: false,
  contricion: false,
  credo: false,
  peticiones: false,
  actual: 0,
}

const reducer = (state, action) => {

  const { type } = action;

  switch (type) {

    case "next": {
      const actual = state.actual < 5 ? state.actual + 1 : 5;
      const updates = {
        1: { senal: true },
        2: { invocacion: true },
        3: { contricion: true },
        4: { credo: true },
        5: { peticiones: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { senal: false },
        1: { invocacion: false },
        2: { contricion: false },
        3: { credo: false },
        4: { peticiones: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

}
}



export default function Intro ({header, prev, next}) {
  const [state, set] = useReducer(reducer, intro)
  const singlePress = () => set({type: "next"})
  const goBack = () => set({type:"previous"})

  return <Slide>

  <Frame
    src="/intro.webp"
    alt="Oh señor. Envia tu Espiritu."
  />

    <Steps  up={goBack} down={singlePress} header={header} left={prev} right={next} >

      <IntroPrayer title="Señal de la Cruz" getter={state} setter={singlePress} to="senal">
        <Introductio 
          titulo="Señal de la Cruz"
          leyenda={senal}
        /> 
      </IntroPrayer>

      <IntroPrayer title="Invocación del Espiritu Santo" getter={state} setter={singlePress} to="invocacion">
        <Introductio
          titulo="Invocación del Espiritu Santo"
          leyenda={invocacion}
        />
      </IntroPrayer>

      <IntroPrayer title="Acto de Contrición" getter={state} setter={singlePress} to="contricion" >
        <Introductio
          titulo="Acto de Contrición"
          leyenda={contricion}
        />
      </IntroPrayer>

      <IntroPrayer title="Credo de los Apóstoles" getter={state} setter={singlePress} to="credo" >
      <Introductio
        titulo="Credo de los Apóstoles"
        leyenda={credo}
      />
      </IntroPrayer>

      <IntroPrayer title="Peticiones" getter={state} setter={singlePress} to="peticiones" >
        <Introductio 
          titulo="Peticiones"
          leyenda="Agradecimiento y peticiones, incluyendo por las almas del purgatorio."
        />
      </IntroPrayer>
    </Steps>
  </Slide>

}
