import { Dialogus, Vox, Slide, Frame,  Prayer, Steps, Beads  } from '@/components' 

export function Jaculatorias () {
  return <Prayer title="Jaculatorias" to="jaculatorias" >
    <Dialogus titulo="Jaculatorias" >
      <Vox 
        lider={ "María, madre de gracia, madre de misericordia,  en la vida y en la muerte ampáranos gran señora,"} 
        respuesta={"no te olvides de nosotros en aquella última hora, ¡oh virgen santísima!"} />
      <Vox 
        lider={"¡Oh Jesús mío! Perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas,"} 
        respuesta={"especialmente a las más necesitadas de tu infinita misericordia. Amén."} />
    </Dialogus>
  </Prayer>
}


