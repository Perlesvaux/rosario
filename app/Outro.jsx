import { Dialogus, Extra, Facio, Susurri  } from './ui.jsx'
import {padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve} from './prayers.js'

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

  <section className="bg-amber-100  px-4 py-2 text-amber-800 rounded-xl"  >

  </section>
  </>

}
