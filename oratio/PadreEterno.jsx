import {Dialogus, Prayer} from '@/components'

export function PadreEterno(){
  return <Prayer title="Padre Eterno ..." to="padreeterno1" > 
  <Dialogus
    titulo="Padre Eterno"
    lider={ <span>Padre Eterno, Te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de Tu Amadísimo Hijo, nuestro Señor Jesucristo</span> } 
    respuesta={ <span>como propiciación de nuestros pecados y los del mundo entero.</span> } 
  />
</Prayer>
}
