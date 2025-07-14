import { senal, invocacion, contricion, credo } from './prayers.js'
import { Introductio } from './ui.jsx'

export default function Intro () {

  return <>

    <Introductio 
      titulo="Señal de la Cruz"
      leyenda={senal}
    /> 

    <Introductio
      titulo="Invocación del Espiritu Santo"
      leyenda={invocacion}
    />

    <Introductio
      titulo="Acto de Contrición"
      leyenda={contricion}
    />

    <Introductio
      titulo="Credo de los Apóstoles"
      leyenda={credo}
    />

    <Introductio 
      titulo="Agradecimiento y peticiones nuestras, incluyendo por las almas del purgatorio."
    />

  </>

}
