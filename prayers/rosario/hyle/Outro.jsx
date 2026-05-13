import { memo } from 'react';
import { padreNuestro, aveMaria, fe, esperanza, caridad, gloria, salve, jaculatorias_finales} from '../../oracionesComunes'
import { Dialogus, Introductio, Slide, Frame, Vox, Prayer, Steps } from '../../../components' 
import {useHolyContext, PrayerContext} from '../../../hooks'
import outroImg from '../../../public/outro.webp'
import { useRosarioStateOf } from '../morphe/state'

function Outro ({header}){

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useRosarioStateOf("outro")

  return ( <PrayerContext.Provider value={{header:`${header} - Oraciones Finales`, next, currentState, show, isSimple}}>
    <Slide> 

      <Frame 
        src={outroImg} 
        alt="Que renueve la faz de la tierra!" 
        advance={next}
        retrocede={prev}
      />

      { !isSimple?
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

          :
          <Steps>

          <Prayer title="Salve" to="salve">
            <Dialogus
              titulo="Salve" 
              lider={salve.l} 
              respuesta={salve.r}
            />
          </Prayer>

          <Prayer title="Final" to="final">
            <Dialogus titulo="Final">
              <div className="flex flex-col gap-1">
                {jaculatorias_finales.map((letania, indx)=><div  key={indx}><Vox lider={letania.l} respuesta={letania.r} /></div>)}
              </div>
            </Dialogus>
        </Prayer>

      </Steps>
      }


    </Slide>
  </PrayerContext.Provider>)
}
export default memo(Outro)


