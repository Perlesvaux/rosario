import { memo } from 'react';
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, letanias_1, letanias_2, letanias_3, letanias_4, letanias_final, oremos, aveMariaPurisima, jaculatorias_finales} from './prayers.js'
import { Dialogus, Introductio, Extra, Facio, Susurri, Dictum, Slide, Frame   } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext, useShowOutro } from './hooks.js'
import outroImg from '../public/outro.webp'

function Outro ({header}){

  const {show, currentState, next, prev} = useShowOutro()

  return ( <PrayerContext.Provider value={{header:`${header} - Oraciones Finales`, next, currentState, show}}>
    <Slide> 

      <Frame 
        src={outroImg} 
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Peticiones" to="peticiones">
          <Introductio 
            titulo="Peticiones"
            leyenda="Peticiones. por los pedidos anteriores, por la iglesia, etc."
          />
        </Prayer>

        <Prayer title="Padre Nuestro" to="padrenuestro">
          <Dialogus 
            titulo="Padre Nuestro"
            lider={padreNuestro.l} 
            respuesta={padreNuestro.r}
          />
        </Prayer>

        <Prayer title="Fe, Esperanza y Caridad" to="avemarias">
          <Dialogus titulo="Fe, Esperanza y Caridad"  >
            <div className="px-4" >
            <Dialogus
              titulo="Ave María por la Fe"
              lider={fe} 
              respuesta={aveMaria.r}
            />
            <Dialogus
              titulo="Ave María por la Esperanza"
              lider={esperanza} 
              respuesta={aveMaria.r}
            />
            <Dialogus
              titulo="Ave María por la Caridad"
              lider={caridad} 
              respuesta={aveMaria.r}
            />
            </div>
          </Dialogus>
        </Prayer>

        <Prayer title="Gloria" to="gloria">
          <Dialogus
            titulo="Gloria"
            lider={gloria.l} 
            respuesta={gloria.r}
          />
        </Prayer>

        <Prayer title="Salve" to="salve">
          <Dialogus
            titulo="Salve" 
            lider={salve.l} 
            respuesta={salve.r}
          />
        </Prayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
export default memo(Outro)
