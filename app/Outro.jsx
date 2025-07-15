import { Dialogus, Extra, Facio, Susurri, Dictum  } from './ui.jsx'
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'

export default function Outro (){

return <> 

    <Extra titulo="Peticiones. por los pedidos anteriores, por la iglesia, etc." />

    <section className="bg-amber-100  px-4 py-2 text-amber-800 rounded-xl"  >

      <Dialogus>
        <Facio>  Padre Nuestro</Facio>
        <Susurri lider={padreNuestro.l} respuesta={padreNuestro.r} />
      </Dialogus>

      <Dialogus>
        <Facio>  Ave María por la Fe</Facio>
        <Susurri lider={fe} respuesta={aveMaria.r} />
      </Dialogus>

      <Dialogus>
        <Facio>  Ave María por la Esperanza</Facio>
        <Susurri lider={esperanza} respuesta={aveMaria.r} />
      </Dialogus>

      <Dialogus>
        <Facio>  Ave María por la Caridad</Facio>
        <Susurri lider={caridad} respuesta={aveMaria.r} />
      </Dialogus>

      <Dialogus>
        <Facio>  Gloria </Facio>
        <Susurri lider={gloria.l} respuesta={gloria.r} />
      </Dialogus>

      <Dialogus>
        <Facio>  Salve </Facio>
        <Susurri lider={salve.l} respuesta={salve.r} />
      </Dialogus>

  </section>

    <Extra titulo="Oración previa a Letanías" leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas." />

  <section className="bg-amber-100  px-4 py-2 text-amber-800 rounded-xl space-y-1 "  >

        {letanias_1.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}
                                                             
        {letanias_2.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></Dialogus>)}
                                                             
        {letanias_3.map((letania, indx)=><Dialogus key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></Dialogus>)}
                                                              
        {letanias_4.map((letania, indx)=><Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></Dialogus> )}

      <Dialogus>
        <Susurri lider={letanias_final.l} respuesta={letanias_final.r} />
      </Dialogus>

      <Dialogus>
        <Facio> Oremos </Facio>
        <Susurri lider={oremos.l} respuesta={oremos.r} />
      </Dialogus>

      
        {aveMariaPurisima.map((letania, indx)=> <Dialogus key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </Dialogus> )}
      

      {jaculatorias_finales.map((letania, indx)=><Dialogus  key={indx}><Susurri lider={letania.l} respuesta={letania.r} /></Dialogus>)}

  </section>
  </>

}
