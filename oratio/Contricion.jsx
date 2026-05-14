import { Introductio, Prayer } from '@/components' 
export function Contricion () {
  return <Prayer title="Acto de Contrición" to="contricion" >
      <Introductio
        titulo="Acto de Contrición"
        leyenda={ "Jesús, mi Señor y redentor, yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ello he ofendido a un Dios tan bueno. Prometo firmemente no volver a pecar. Amén."}
      />
    </Prayer>
}
