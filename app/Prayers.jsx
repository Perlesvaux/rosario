import Beads from './Beads.jsx'
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import { Dialogus, Vox, Mysterium, Titulus, Slide, Frame } from './ui.jsx' 
import { Prayer, Steps } from './ui-client.jsx'
import { PrayerContext, useHolyContext } from './hooks.js'

export default function Prayers({misterio, index}) {

  const {state, dispatch} = useHolyContext()
  const next = ()=>{ dispatch({type: "advance mystery", index: index }) }
  const prev = ()=>{ dispatch({type: "previous mystery", index: index }) }
  const currentState = state.mysteries[index]

  const show = (to) => {
    if (to === "misterio" && currentState.actual == 0) return true
    if (to === "padrenuestro" && currentState.actual == 1) return true
    if (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11) return true
    if (to === "gloria" && currentState.actual == 12) return true
    if (to === "jaculatorias" && currentState.actual == 13) return true
  }

  return ( <PrayerContext.Provider value={{header:misterio.encabezado, next, currentState, show}}>
    <Slide>

      <Frame
        src={misterio.imagen}
        alt={misterio.titulo}
        advance={next}
        retrocede={prev}
      />

      <Steps>

        <Prayer title="Misterio" to="misterio"  > 
          <article className="pt-4">
            <h2 className="text-base md:text-xl font-bold text-gray-900">Misterio</h2>
            <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base font-bold">{misterio.titulo}</div>
            <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">Fruto del misterio: {misterio.fruto}</div>
            <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">{misterio.leyenda}</div>
            <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">{misterio.l}</div>
            <div className="bg-gray-700 border-l-4 border-gray-900 px-4 py-1 text-gray-50 text-sm md:text-base">{misterio.r}</div>
          </article>
        </Prayer>

        <Prayer title="Padre Nuestro" to="padrenuestro" > 
          <Dialogus
            titulo="Padre Nuestro"
            lider={ padreNuestro.l } 
            respuesta={ padreNuestro.r } 
          />
        </Prayer>

        <Beads>
          <Dialogus
            titulo="Ave María (x10)"
            lider={ aveMaria.l } 
            respuesta={ aveMaria.r }
          />
        </Beads>

        <Prayer title="Gloria" to="gloria"  >
          <Dialogus
            titulo="Gloria"
            lider={gloria.l}
            respuesta={gloria.r}
          />
        </Prayer>

        <Prayer title="Jaculatorias" to="jaculatorias" >
          <Dialogus titulo="Jaculatorias" >
            <Vox lider={jaculatoria_1.l} respuesta={jaculatoria_1.r} />
            <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
          </Dialogus>
        </Prayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

