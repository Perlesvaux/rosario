import {Prayer, Dialogus} from '@/components'

export function AveMaria () {
return <Prayer  title="Ave Maria" to="avemaria1" >
  <Dialogus
    titulo="Ave María"
    lider={ "Dios te salve María, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús." } 
    respuesta={  "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén." }
  />
</Prayer>

}
