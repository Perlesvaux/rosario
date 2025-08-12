import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { Dialogus, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext } from './hooks.js'
import litanyImg from '../public/litany.webp'

export default function Litany (){

  const {state, dispatch} = useHolyContext();
  const next = ()=>{ dispatch({type: "advance litany"}) };
  const prev = ()=>{ dispatch({type: "previous litany"}) }
  const currentState = state.litany;

  const show = (to) => {
    if (to === "inicio" && currentState.actual == 0 ) return true 
    if (to === "letanias" && currentState.actual == 1) return true
    if (to === "oremos" && currentState.actual == 2) return true
    if (to === "avemariapurisima" && currentState.actual == 3) return true
    if (to === "final" && currentState.actual == 4) return true
  }

  return ( <PrayerContext.Provider value={{header:"Letanías Lauretanas", next, currentState, show}}>
    <Slide> 

      <Frame
        src={litanyImg}
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      <Steps>
        <Prayer title="Inicio" to="inicio">
          <Extra 
            titulo="Oración previa a Letanías" 
            leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas." 
          />
        </Prayer>

        <Prayer title="Letanías" to="letanias">
          <section className="px-4 text-amber-800 space-y-1  overflow-y-auto h-[50svh]"   >

            {letanias_1.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}

            {letanias_2.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}

            {letanias_3.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></Dialogus>)}

            {letanias_4.map((letania, indx)=><Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></Dialogus> )}

            <Dialogus>
              <Susurri lider={letanias_final.l} respuesta={letanias_final.r} />
            </Dialogus>

          </section>
        </Prayer>

        <Prayer title="Oremos" to="oremos">
          <Dialogus>
            <Facio> Oremos </Facio>
            <Susurri lider={oremos.l} respuesta={oremos.r} />
          </Dialogus>
        </Prayer>

        <Prayer title="Ave Maria Purisima" to="avemariapurisima">
          {aveMariaPurisima.map((letania, indx)=> <Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </Dialogus> )}
        </Prayer>

        <Prayer title="Final" to="final">
          {jaculatorias_finales.map((letania, indx)=><Dialogus  key={indx}><Susurri lider={letania.l} respuesta={letania.r} /></Dialogus>)}
        </Prayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

