import { Dialogus, Vox, Slide, Frame,  Prayer, Steps, Beads  } from '@/components' 

export function DecenaAveMaria(){
  return <Beads to="avemaria" titulo="Ave María">
    <Dialogus
      titulo="Ave María (x10)"
      lider={ "Dios te salve María, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús." } 
      respuesta={  "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén." }
    />
  </Beads> 
}
        
