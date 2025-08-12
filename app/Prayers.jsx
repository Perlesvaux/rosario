import Beads from './Beads.jsx'
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import { Dialogus, Vox, Mysterium, Titulus, Slide, Frame } from './ui.jsx' 
import { MysteryPrayer, Steps } from './ui-client.jsx'
import { PrayerContext, useHolyContext } from './hooks.js'


export default function Prayers({misterio, index}) {

  const {dispatch} = useHolyContext()

  return ( <PrayerContext.Provider value={{header:misterio.encabezado, index}}>
    <Slide>

      <Frame
        src={misterio.imagen}
        alt={misterio.titulo}
        advance={()=>{ dispatch({type: "advance mystery", index: index }) }}
        retrocede={()=>{ dispatch({type: "previous mystery", index: index }) }}
      />

      <Steps>

        <MysteryPrayer title="Misterio" to="misterio"  > 
          <article className="pb-4 pt-4">
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base font-bold">{misterio.titulo}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">Fruto del misterio: {misterio.fruto}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{misterio.leyenda}</div>
            <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{misterio.l}</div>
            <div className=" bg-red-50 border-l-4  border-red-400 px-4 py-1  text-red-800 text-sm md:text-base">{misterio.r}</div>
          </article>
        </MysteryPrayer>

        <MysteryPrayer title="Padre Nuestro" to="padrenuestro" > 
          <Titulus>Padre Nuestro</Titulus>
          <Vox lider={ padreNuestro.l } respuesta={ padreNuestro.r } />
        </MysteryPrayer>

        <Beads>
          <Titulus>Ave María (x10)</Titulus>
          <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
        </Beads>

        <MysteryPrayer title="Gloria" to="gloria"  >
          <Titulus>Gloria</Titulus>
          <Vox lider={ gloria.l } respuesta={ gloria.r } />
        </MysteryPrayer>

        <MysteryPrayer title="Jaculatorias" to="jaculatorias" >
          <Titulus>Jaculatorias</Titulus>
          <Vox lider={jaculatoria_1.l} respuesta={jaculatoria_1.r} />
          <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
        </MysteryPrayer>

      </Steps>

    </Slide>
  </PrayerContext.Provider>)
}

