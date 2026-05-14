import { Dialogus, Vox, Slide, Frame,  Prayer, Steps, Beads  } from '@/components' 

export function Gloria () {
  return <Prayer title="Gloria" to="gloria"  >
    <Dialogus
      titulo="Gloria"
      lider={ "Gloria al Padre, y al Hijo, y al Espíritu Santo."}
      respuesta={"Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."}
    />
  </Prayer>





}
