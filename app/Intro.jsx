"use client"
import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio, Slide, Frame, List, Steps } from './ui.jsx'
import { Prayer } from './Prayers.jsx'
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
        1: { señaldelacruz: true },
        2: { invocacióndelespiritusanto: true },
        3: { actodecontrición: true },
        4: { credodelosapóstoles: true },
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
        0: { señaldelacruz: false },
        1: { invocacióndelespiritusanto: false },
        2: { actodecontrición: false },
        3: { credodelosapóstoles: false },
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

      <Prayer title="Señal de la Cruz" getter={state} setter={singlePress} index={0}>
        <Introductio 
          titulo="Señal de la Cruz"
          leyenda={senal}
        /> 
      </Prayer>

      <Prayer title="Invocación del Espiritu Santo" getter={state} setter={singlePress} index={1}>
        <Introductio
          titulo="Invocación del Espiritu Santo"
          leyenda={invocacion}
        />
      </Prayer>

      <Prayer title="Acto de Contrición" getter={state} setter={singlePress} index={2}>
        <Introductio
          titulo="Acto de Contrición"
          leyenda={contricion}
        />
      </Prayer>

      <Prayer title="Credo de los Apóstoles" getter={state} setter={singlePress} index={3}>
      <Introductio
        titulo="Credo de los Apóstoles"
        leyenda={credo}
      />
      </Prayer>

      <Prayer title="Peticiones" getter={state} setter={singlePress} index={3}>
        <Introductio 
          titulo="Peticiones"
          leyenda="Agradecimiento y peticiones, incluyendo por las almas del purgatorio."
        />
      </Prayer>
    </Steps>
  </Slide>

}
