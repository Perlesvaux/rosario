import { memo } from 'react';
import { senal, invocacion, contricion, credo, fe, esperanza, caridad, gloria, aveMaria } from '../../oracionesComunes'
import { Dialogus, Introductio, Slide, Frame,  Prayer, Steps  } from '../../../components'
import { useHolyContext, PrayerContext } from '../../../hooks'
import { useRosarioStateOf } from '../morphe/state'
import {RenderPrayer, SenalDeLaCruz} from '@/oratio'

import introImg from '../../../public/intro.webp'

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

        <RenderPrayer />

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
