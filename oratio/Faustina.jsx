import { Introductio,  Prayer  } from '@/components' 

export function Faustina () {
  return <Prayer title="Oración de Santa Faustina" to="faustina1">
    <Introductio 
      titulo="Oración de Santa Faustina"
      leyenda={<span>Expiraste, Jesús, pero la fuente de vida brotó para las almas y el mar de misericordia se abrió para el mundo entero. Oh fuente de vida, insondable Misericordia Divina, abarca al mundo entero y derrámate sobre nosotros. Oh Sangre y Agua que brotaste del Corazón de Jesús, como una Fuente de Misericordia para nosotros, en Ti confío.</span>}
    /> 
  </Prayer>
}
