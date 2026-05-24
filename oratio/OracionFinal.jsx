import {Prayer, Introductio} from '@/components'

export function OracionFinal(){
  return <Prayer title="Final" to="oracionfinal">
    <Introductio
      titulo="Oracion Final" 
      leyenda={<span>Oh Dios Eterno, en quien la misericordia es infinita y el tesoro de compasión inagotable, vuelve a nosotros Tu mirada bondadosa y aumenta Tu misericordia en nosotros, para que en momentos difíciles no nos desesperemos ni nos desalentamos, sino que, con gran confianza, nos sometamos a Tu santa voluntad, que es el Amor y la Misericordia Mismos.</span>}
    />
  </Prayer>
}
