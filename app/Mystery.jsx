import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 
//import Mysteries from './Mysteries.jsx'


export default function Mystery({ misterio, index }) {
  return <>

    <Mysterium misterio={misterio} index={index} />

  </>

}

