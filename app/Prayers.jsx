'use client'
import { useState, useEffect } from 'react'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 
import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import Beads from './Beads.jsx'


const prayers = [
  <Dialogus>
    <Titulus>Padre Nuestro</Titulus>
    <Vox lider={padreNuestro.l}  respuesta={padreNuestro.r} />
  </Dialogus>,
  <>
  <Dialogus>
    <Titulus>Ave María (x10)</Titulus>
    <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
  </Dialogus>
    <Beads />
  </>,
  <Dialogus>
    <Titulus>Gloria</Titulus>
    <Vox lider={ gloria.l } respuesta={ gloria.r } />
  </Dialogus>,
  <Dialogus>
    <Titulus>Jaculatorias</Titulus>
    <Vox lider={jaculatoria_1.l}  respuesta={jaculatoria_1.r} />
    <Vox lider={jaculatoria_2.l} respuesta={jaculatoria_2.r} />
  </Dialogus>
]


export default function Prayers() {
  const [index, setIndex] = useState(0)

  

  const prev = () => setIndex(i => (i - 1 + prayers.length) % prayers.length)
  const next = () => setIndex(i => (i + 1) % prayers.length)

  return (
    <div className="flex flex-col items-center gap-2 relative">

    <article className="h-[22vh] overflow-hidden">
        { prayers[index] }
    </article>

      <div key={index} className="flex gap-2 absolute  bottom-0 right-0">

        { index!==prayers.length-1 && <>
            <button onClick={prev} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Prev</button>
              <button onClick={next} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-500 transition">Next</button>
          </>
        }
      </div>
    </div>
  )
}

