import { memo } from 'react';
import { senal, credo, aveMaria, padreNuestro, faustina } from '../hooks'
import { Dialogus, Introductio, Slide, Frame } from './ui.jsx'
import { Prayer, Steps } from './ui-client.jsx'
import { useHolyContext, PrayerContext, 
  useCoronillaMisericordiaStateOf 
} from '../hooks'
import introImg from '../public/intro.webp'

function CoronillaIntro ({header}) {

  //const {isSimple} = useHolyContext()

  const {show, currentState, next, prev} = useCoronillaMisericordiaStateOf("intro")

  //const prev = () => { return }
  //const next = () => { return }
  return ( <PrayerContext.Provider value={{header, next, currentState, show}}>
    <Slide>

      <Frame
        src={introImg}
        alt="Coronilla de la divina misericordia - Intro"
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


        <Prayer title="Oración de Santa Faustina" to="faustina">
          <Introductio 
            titulo="Oración de Santa Faustina"
            leyenda={faustina}
          /> 
        </Prayer>


        <Prayer title="Padre Nuestro" to="padrenuestro" > 
          <Dialogus
            titulo="Padre Nuestro"
            lider={ padreNuestro.l } 
            respuesta={ padreNuestro.r } 
          />
        </Prayer>

        <Prayer  title="Ave Maria" to="avemaria" >
          <Dialogus
            titulo="Ave María"
            lider={ aveMaria.l } 
            respuesta={ aveMaria.r }
          />
        </Prayer>



        <Prayer title="Credo de los Apóstoles" to="credo" >
          <Introductio
            titulo="Credo de los Apóstoles"
            leyenda={credo}
          />
        </Prayer>





      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}
export default memo(CoronillaIntro)

