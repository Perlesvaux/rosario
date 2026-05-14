import { Introductio, Prayer } from '@/components' 
export function Invocacion(){
  return <Prayer title="Invocación" to="invocacion">
    <Introductio
      titulo="Invocación del Espiritu Santo"
      leyenda={"¡OH SEÑOR ENVÍA TU ESPÍRITU, QUE RENUEVE LA FAZ DE LA TIERRA!  (REPETIR 3 VECES)."}
    />
  </Prayer>
}
