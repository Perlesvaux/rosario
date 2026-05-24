import {Prayer, Dialogus} from '@/components'

export function Oremos () {

  return <Prayer title="Oremos" to="oremos">
      <Dialogus
        titulo="Oremos"
        lider={oremos.l} 
        respuesta={oremos.r}
      />
    </Prayer>
}

export const oremos = {
  "l": "Oremos. Te rogamos señor, que nos concedas a nosotros tus siervos, gozar de perpetua  salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada Virgen María, seamos librados de la tristeza presente y disfrutemos de la eterna alegría. Por Jesucristo, nuestro Señor.", "r":"Amén."
}
