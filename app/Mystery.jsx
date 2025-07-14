import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import  { gozosos } from './misterios.js'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 


export default function Mystery() {
  const { lista:misterios_de_hoy } = misterio_del_dia()

  return (<>
    {
      misterios_de_hoy.map((misterio, indx)=>
        <section className="bg-rose-50  px-4 py-2 text-rose-800 rounded"  key={indx}>

          <Mysterium {...misterio} />

          <Dialogus>
            <Titulus>Padre Nuestro</Titulus>
            <Vox lider={padreNuestro.l}  respuesta={padreNuestro.r} />
          </Dialogus>

          <Dialogus>
            <Titulus>Ave María (x10)</Titulus>
            <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
          </Dialogus>

          <Dialogus>
            <Titulus>Gloria</Titulus>
            <Vox lider={ gloria.l } respuesta={ gloria.r } />
          </Dialogus>

          <Dialogus>

            <Titulus>Jaculatorias</Titulus>

            <Vox
              lider={jaculatoria_1.l}
              respuesta={jaculatoria_1.r}
            />

            <Vox
              lider={jaculatoria_2.l}
              respuesta={jaculatoria_2.r}
            />

        </Dialogus>


        </section>

      )
    }
    

  </>)

}




export const misterio_del_dia = () => {
  const today = new Date().getDay()
  if (today === 1 || today === 6) return gozosos
  if (today === 2 || today === 5) return 
  if (today === 3 || today === 0) return
  if (today === 4) return



}
