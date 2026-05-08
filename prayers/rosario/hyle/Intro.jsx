import { memo } from 'react';
import { senal, invocacion, contricion, credo, fe, esperanza, caridad, gloria, aveMaria } from '../hooks'
import { Dialogus, Introductio, Slide, Frame, Titulus } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
//import { useStateOf } from './hooks.js'
import { useHolyContext, PrayerContext, useRosarioStateOf } from '../hooks'
import introImg from '../public/intro.webp'

function Intro ({header}) {

  const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useRosarioStateOf("intro")

  return ( <PrayerContext.Provider value={{header, next, currentState, show, isSimple}}>
    <Slide>

      <Frame
        src={introImg}
        alt="Oh señor. Envia tu Espiritu."
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Señal de la Cruz" to="senal">
          <Introductio 
            titulo="Señal de la Cruz"
            leyenda={senal}
          /> 
        </Prayer>

        {
          !isSimple && <>
            <Prayer title="Invocación" to="invocacion">
              <Introductio
                titulo="Invocación del Espiritu Santo"
                leyenda={invocacion}
              />
            </Prayer>
          </>
        }

        {
          !isSimple && <>
            <Prayer title="Acto de Contrición" to="contricion" >
              <Introductio
                titulo="Acto de Contrición"
                leyenda={contricion}
              />
            </Prayer>
          </>
        }

        <Prayer title="Credo de los Apóstoles" to="credo" >
          <Introductio
            titulo="Credo de los Apóstoles"
            leyenda={credo}
          />
        </Prayer>

        {
          !isSimple && <>
            <Prayer title="Peticiones" to="peticiones" >
              <Introductio 
                titulo="Peticiones"
                leyenda="Agradecimiento y peticiones, incluyendo por las almas del purgatorio."
              />
            </Prayer>
          </>
        }





        {
          isSimple && <>
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

            <Prayer title="Gloria" to="gloria"  >
              <Dialogus
                titulo="Gloria"
                lider={gloria.l}
                respuesta={gloria.r}
              />
            </Prayer>
          </>
        }



      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
export default memo(Intro)



//export function SimpleIntro ({header}) {
//
//  const {show, currentState, next, prev} = useShowSimpleIntro()
//
//  return ( <PrayerContext.Provider value={{header, next, currentState, show}}>
//    <Slide>
//
//      <Frame
//        src={introImg}
//        alt="Oh señor. Envia tu Espiritu."
//        advance={next}
//        retrocede={prev}
//      />
//
//      <Steps>
//
//        <Prayer title="Señal de la Cruz" to="senal">
//          <Introductio 
//            titulo="Señal de la Cruz"
//            leyenda={senal}
//          /> 
//        </Prayer>
//
//        <Prayer title="Credo de los Apóstoles" to="credo" >
//          <Introductio
//            titulo="Credo de los Apóstoles"
//            leyenda={credo}
//          />
//        </Prayer>
//
//
//        <Prayer title="Fe, Esperanza y Caridad" to="avemarias">
//          <Dialogus titulo="Fe, Esperanza y Caridad"  >
//            <div className="px-4" >
//            <Dialogus
//              titulo="Ave María por la Fe"
//              lider={fe} 
//              respuesta={aveMaria.r}
//            />
//            <Dialogus
//              titulo="Ave María por la Esperanza"
//              lider={esperanza} 
//              respuesta={aveMaria.r}
//            />
//            <Dialogus
//              titulo="Ave María por la Caridad"
//              lider={caridad} 
//              respuesta={aveMaria.r}
//            />
//            </div>
//          </Dialogus>
//        </Prayer>
//
//        <Prayer title="Gloria" to="gloria"  >
//          <Dialogus
//            titulo="Gloria"
//            lider={gloria.l}
//            respuesta={gloria.r}
//          />
//        </Prayer>
//
//
//      </Steps>
//
//    </Slide>
//  </PrayerContext.Provider>)
//}
