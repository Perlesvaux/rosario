import { Dialogus, Vox, Slide, Frame,  Prayer, Steps, Beads  } from '@/components' 

export function PadreNuestro(){

  return <Prayer title="Padre Nuestro" to="padrenuestro" > 
    <Dialogus
      titulo="Padre Nuestro"
      lider={ "Padre nuestro que estás en el cielo, santificado sea Tu Nombre; venga a nosotros Tu Reino; hágase tu voluntad, en la tierra como en el cielo." } 
      respuesta={ "Danos hoy nuestro pan de cada día; perdona nuestras deudas, como también nosotros perdonamos a nuestros deudores; no nos dejes caer en tentación, y líbranos del maligno. Amén." } 
    />
  </Prayer>
}
