import { Dialogus, Prayer } from '@/components' 


export function FeEsperanzaCaridad () {

  return <Prayer title="Fe, Esperanza y Caridad" to="avemarias">
      <Dialogus titulo="Fe, Esperanza y Caridad"  >
        <div className="px-4" >
          <Dialogus
            titulo="Ave María por la Fe"
            lider={ <span>Dios te Salve María Santísima, <strong>hija de Dios Padre, auméntanos la fe</strong>, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.</span>} 
            respuesta={ "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."}
          />
          <Dialogus
            titulo="Ave María por la Esperanza"
            lider={<span>Dios te Salve María Santísima,  <strong>madre de Dios hijo, auméntanos la esperanza</strong>, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.</span>} 
            respuesta={ "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."}
          />
          <Dialogus
            titulo="Ave María por la Caridad"
            lider={<span>Dios te Salve María Santísima, <strong>esposa de Dios Espíritu Santo, auméntanos la caridad</strong>, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.</span>} 
            respuesta={ "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."}
          />
        </div>
      </Dialogus>
    </Prayer>

}
