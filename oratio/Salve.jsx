import {Prayer, Dialogus} from '@/components'

export function Salve() {
  return <Prayer title="Salve" to="salve1">
      <Dialogus
        titulo="Salve" 
        lider={"Dios te salve, reina y madre de misericordia; vida, dulzura y esperanza nuestra; Dios te salve. A ti clamamos los desterrados hijos de Eva. A ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente! ¡Oh piadosa! !Oh Dulce Virgen María! Ruega por nosotros, Santa Madre de Dios."} 
        respuesta={"Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. Amén."}
      />
    </Prayer>
}
