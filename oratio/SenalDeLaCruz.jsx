import { Introductio, Prayer } from '@/components' 


export function SenalDeLaCruz(){
  return <Prayer title="Señal de la Cruz" to="senal1">
      <Introductio 
        titulo="Señal de la Cruz"
        leyenda={ "Por la señal de la Santa Cruz, de nuestros enemigos líbranos Señor, Dios Nuestro. En el nombre del Padre, del hijo y del Espíritu Santo. AMÉN."}
      /> 
    </Prayer>
}
