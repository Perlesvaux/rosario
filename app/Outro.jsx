"use client"
import { Dialogus, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { OutroPrayer, Steps } from './ui-client.jsx'
import { HolyContext, useOutro, useHolyContext } from './hooks.js'
import outroImg from '../public/outro.webp'


export default function Outro ({prev, next}){
  const {state, goBack, singlePress} = useOutro()

//return <HolyContext.Provider value={{ state, goBack, singlePress, header:"Santo Rosario", prev, next }}>
return <>
  <Slide> 
    <Frame src={outroImg} alt="Que renueve la faz de la tierra!" />

      <Steps>

        <OutroPrayer title="Peticiones" to="peticiones">
          <Extra titulo="Peticiones. por los pedidos anteriores, por la iglesia, etc." />
        </OutroPrayer>

        <OutroPrayer title="Padre Nuestro" to="padrenuestro">
          <Dialogus>
            <Facio>  Padre Nuestro</Facio>
            <Susurri lider={padreNuestro.l} respuesta={padreNuestro.r} />
          </Dialogus>
        </OutroPrayer>

        <OutroPrayer title="Ave María por la Fe" to="fe">
          <Dialogus>
            <Facio>  Ave María por la Fe</Facio>
            <Susurri lider={fe} respuesta={aveMaria.r} />
          </Dialogus>
        </OutroPrayer>

        <OutroPrayer title="Ave María por la Esperanza" to="esperanza">
          <Dialogus>
            <Facio>  Ave María por la Esperanza</Facio>
            <Susurri lider={esperanza} respuesta={aveMaria.r} />
          </Dialogus>
        </OutroPrayer>

        <OutroPrayer title="Ave María por la Caridad" to="caridad">
          <Dialogus>
            <Facio>  Ave María por la Caridad</Facio>
            <Susurri lider={caridad} respuesta={aveMaria.r} />
          </Dialogus>
        </OutroPrayer>

        <OutroPrayer title="Gloria" to="gloria">
          <Dialogus>
            <Facio>  Gloria </Facio>
            <Susurri lider={gloria.l} respuesta={gloria.r} />
          </Dialogus>
        </OutroPrayer>

        <OutroPrayer title="Salve" to="salve">
          <Dialogus>
            <Facio>  Salve </Facio>
            <Susurri lider={salve.l} respuesta={salve.r} />
          </Dialogus>
        </OutroPrayer>

      </Steps>

    </Slide>
  </>

}

  //</HolyContext.Provider>






