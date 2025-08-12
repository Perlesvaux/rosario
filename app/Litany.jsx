import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { Dialogus, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
import { OutroPrayer, LitanyPrayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext } from './hooks.js'

export default function Outro ({prev, next}){

  const {dispatch} = useHolyContext()

  return ( <PrayerContext.Provider value={{header:"Letanías Lauretanas"}}>
    <Slide> 

      <Frame
        src="/litany.webp"
        alt="Que renueve la faz de la tierra!" 
        advance={()=>{ dispatch({type: "advance litany"}) }}
        retrocede={()=>{ dispatch({type: "previous litany"}) }}
      />

      <Steps>
        <LitanyPrayer title="Inicio" to="inicio">
          <Extra 
            titulo="Oración previa a Letanías" 
            leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas." 
          />
        </LitanyPrayer>

        <LitanyPrayer title="Letanías" to="letanias">
          <section className="px-4 text-amber-800 space-y-1  overflow-y-auto h-[50svh]"   >

            {letanias_1.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}

            {letanias_2.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}

            {letanias_3.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></Dialogus>)}

            {letanias_4.map((letania, indx)=><Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></Dialogus> )}

            <Dialogus>
              <Susurri lider={letanias_final.l} respuesta={letanias_final.r} />
            </Dialogus>

          </section>
        </LitanyPrayer>

        <LitanyPrayer title="Oremos" to="oremos">
          <Dialogus>
            <Facio> Oremos </Facio>
            <Susurri lider={oremos.l} respuesta={oremos.r} />
          </Dialogus>
        </LitanyPrayer>

        <LitanyPrayer title="Ave Maria Purisima" to="avemariapurisima">
          {aveMariaPurisima.map((letania, indx)=> <Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </Dialogus> )}
        </LitanyPrayer>

        <LitanyPrayer title="Final" to="final">
          {jaculatorias_finales.map((letania, indx)=><Dialogus  key={indx}><Susurri lider={letania.l} respuesta={letania.r} /></Dialogus>)}
        </LitanyPrayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

