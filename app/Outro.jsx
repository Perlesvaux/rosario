"use client"
import { Dialogus, Extra, Facio, Susurri, Dictum, Slide, Frame,  Steps   } from './ui.jsx'
import { Prayer } from './Prayers.jsx'
import { useReducer } from 'react'
import Image from "next/image";
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'


const outro = {
  peticiones: false,
  padrenuestro: false,
  avemariaporlafe: false,
  avemaríaporlaesperanza: false,
  avemaríaporlacaridad: false,
  gloria: false,
  salve: false,
  actual: 0,
}

const reducer = (state, action)=> {
  const {type} = action

  switch (type){

    case "next": {
      const actual = state.actual < 7 ? state.actual + 1 : 7;
      const updates = {
        1: { peticiones: true },
        2: { padrenuestro: true },
        3: { avemaríaporlafe: true },
        4: { avemaríaporlaesperanza: true },
        5: { avemaríaporlacaridad: true },
        6: { gloria: true },
        7: { salve: true },
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
        0: { peticiones: false },
        1: { padrenuestro: false },
        2: { avemaríaporlafe: false },
        3: { avemaríaporlaesperanza: false },
        4: { avemaríaporlacaridad: false },
        5: { gloria: false },
        6: { salve: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }



  }


}


export default function Outro ({prev, next}){
  const [state, set] = useReducer(reducer, outro)
  const singlePress = () => set({type: "next"})
  const goBack = () => set({type:"previous"})

return <Slide> 
  <Frame src="/outro.webp" alt="Que renueve la faz de la tierra!" />

    <Steps up={goBack} down={singlePress} header="algo" left={prev} right={next} >

      <Prayer title="Peticiones" getter={state} setter={singlePress} index={0}>
        <Extra titulo="Peticiones. por los pedidos anteriores, por la iglesia, etc." />
      </Prayer>


      <Prayer title="Padre Nuestro" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Padre Nuestro</Facio>
        <Susurri lider={padreNuestro.l} respuesta={padreNuestro.r} />
      </Dialogus>
      </Prayer>

      <Prayer title="Ave María por la Fe" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Ave María por la Fe</Facio>
        <Susurri lider={fe} respuesta={aveMaria.r} />
      </Dialogus>
      </Prayer>

      <Prayer title="Ave María por la Esperanza" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Ave María por la Esperanza</Facio>
        <Susurri lider={esperanza} respuesta={aveMaria.r} />
      </Dialogus>
      </Prayer>

      <Prayer title="Ave María por la Caridad" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Ave María por la Caridad</Facio>
        <Susurri lider={caridad} respuesta={aveMaria.r} />
      </Dialogus>
      </Prayer>

      <Prayer title="Gloria" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Gloria </Facio>
        <Susurri lider={gloria.l} respuesta={gloria.r} />
      </Dialogus>
      </Prayer>

      <Prayer title="Salve" getter={state} setter={singlePress} index={0}>
      <Dialogus>
        <Facio>  Salve </Facio>
        <Susurri lider={salve.l} respuesta={salve.r} />
      </Dialogus>
      </Prayer>

    </Steps>

  </Slide>
}







  //  <Extra titulo="Oración previa a Letanías" leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas." />
  //
  //<section className="bg-amber-100  px-4 py-2 text-amber-800 rounded-xl space-y-1 "  >
  //
  //      {letanias_1.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}
  //
  //      {letanias_2.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}
  //
  //      {letanias_3.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></Dialogus>)}
  //
  //      {letanias_4.map((letania, indx)=><Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></Dialogus> )}
  //
  //    <Dialogus>
  //      <Susurri lider={letanias_final.l} respuesta={letanias_final.r} />
  //    </Dialogus>
  //
  //    <Dialogus>
  //      <Facio> Oremos </Facio>
  //      <Susurri lider={oremos.l} respuesta={oremos.r} />
  //    </Dialogus>
  //
  //
  //      {aveMariaPurisima.map((letania, indx)=> <Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </Dialogus> )}
  //
  //
  //    {jaculatorias_finales.map((letania, indx)=><Dialogus  key={indx}><Susurri lider={letania.l} respuesta={letania.r} /></Dialogus>)}
  //
  //</section>
  //</>
