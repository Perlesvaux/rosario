import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { Dialogus, Vox, Introductio, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
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
          <Introductio 
            titulo="Oración previa a Letanías"
            leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas."
          /> 
        </Prayer>

        <Prayer title="Letanías" to="letanias">
          <section className="text-amber-800 space-y-1  overflow-y-auto h-[50svh]"   >

            <Dialogus titulo="Letanías">
            <div className="flex flex-col gap-1">
              {letanias_1.map((letania, indx)=><div key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></div>)}

              {letanias_2.map((letania, indx)=><div key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></div>)}

              {letanias_3.map((letania, indx)=><div key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></div>)}

              {letanias_4.map((letania, indx)=><div key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></div> )}
            </div>
            </Dialogus>

            <Dialogus>
              <Vox lider={letanias_final.l} respuesta={letanias_final.r} />
            </Dialogus>

          </section>
        </Prayer>

        <Prayer title="Oremos" to="oremos">
          <Dialogus
            titulo="Oremos"
            lider={oremos.l} 
            respuesta={oremos.r}
          />
        </Prayer>

        <Prayer title="Ave Maria Purisima" to="avemariapurisima">
          <Dialogus titulo="Ave María Purisima">
            <div className="flex flex-col gap-1">
              {aveMariaPurisima.map((letania, indx)=> <div key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </div> )}
            </div>
          </Dialogus>
        </Prayer>

        <Prayer title="Final" to="final">
          <Dialogus titulo="Final">
            <div className="flex flex-col gap-1">
              {jaculatorias_finales.map((letania, indx)=><div  key={indx}><Vox lider={letania.l} respuesta={letania.r} /></div>)}
            </div>
          </Dialogus>
        </Prayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

