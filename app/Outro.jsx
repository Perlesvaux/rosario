import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { Dialogus, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext } from './hooks.js'
import outroImg from '../public/outro.webp'

export default function Outro (){

  const {state, dispatch} = useHolyContext()
  const next = ()=>{ dispatch({type: "advance outro"}) }
  const currentState = state.outro

  const show = (to) => {
    if (to === "peticiones" && currentState.actual == 0 ) return true 
    if (to === "padrenuestro" && currentState.actual == 1) return true
    if (to === "fe" && currentState.actual == 2) return true
    if (to === "esperanza" && currentState.actual ==3) return true
    if (to === "caridad" && currentState.actual ==4) return true
    if (to === "gloria" && currentState.actual == 5) return true
    if (to === "salve" && currentState.actual == 6) return true
  }

  return ( <PrayerContext.Provider value={{header:"", index:5, next, currentState, show}}>
    <Slide> 

      <Frame 
        src={outroImg} 
        alt="Que renueve la faz de la tierra!" 
        advance={()=>{ dispatch({type: "advance outro"}) }}
        retrocede={()=>{ dispatch({type: "previous outro"}) }}
      />

      <Steps>

        <Prayer title="Peticiones" to="peticiones">
          <Extra titulo="Peticiones. por los pedidos anteriores, por la iglesia, etc." />
        </Prayer>

        <Prayer title="Padre Nuestro" to="padrenuestro">
          <Dialogus>
            <Facio>  Padre Nuestro</Facio>
            <Susurri lider={padreNuestro.l} respuesta={padreNuestro.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Ave María por la Fe" to="fe">
          <Dialogus>
            <Facio>  Ave María por la Fe</Facio>
            <Susurri lider={fe} respuesta={aveMaria.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Ave María por la Esperanza" to="esperanza">
          <Dialogus>
            <Facio>  Ave María por la Esperanza</Facio>
            <Susurri lider={esperanza} respuesta={aveMaria.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Ave María por la Caridad" to="caridad">
          <Dialogus>
            <Facio>  Ave María por la Caridad</Facio>
            <Susurri lider={caridad} respuesta={aveMaria.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Gloria" to="gloria">
          <Dialogus>
            <Facio>  Gloria </Facio>
            <Susurri lider={gloria.l} respuesta={gloria.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Salve" to="salve">
          <Dialogus>
            <Facio>  Salve </Facio>
            <Susurri lider={salve.l} respuesta={salve.r} />
          </Dialogus>
        </Prayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
