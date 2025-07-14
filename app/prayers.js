import  { gozosos } from './misterios.js'

export const aveMaria = {
  "l" : "Dios te salve María, llena eres de gracia, el Señor es contigo. Bendita eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.",
  "r" : "Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."
}

export const gloria = {
  "l": "Gloria al Padre, y al Hijo, y al Espíritu Santo.",
  "r": "Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."
}

export const jaculatoria_1 = {
  "l": "María, madre de gracia, madre de misericordia,  en la vida y en la muerte ampáranos gran señora,",
  "r": "no te olvides de nosotros en aquella última hora, ¡oh virgen santísima!"
}

export const jaculatoria_2 = {
  "l": "¡Oh Jesús mío! Perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas,",
  "r": "especialmente a las más necesitadas de tu infinita misericordia. Amén."
}


export const padreNuestro = {
"l": "Padre nuestro que estás en el cielo, santificado sea Tu Nombre; venga a nosotros Tu Reino; hágase tu voluntad, en la tierra como en el cielo.",
"r": "Danos hoy nuestro pan de cada día; perdona nuestras deudas, como también nosotros perdonamos a nuestros deudores; no nos dejes caer en tentación, y líbranos del mal. Amén."
}

export const senal = "Por la señal de la Santa Cruz, de nuestros enemigos líbranos Señor, Dios Nuestro. En el nombre del Padre, del hijo y del Espíritu Santo. AMÉN."

export const invocacion = "¡OH SEÑOR ENVÍA TU ESPÍRITU, QUE RENUEVE LA FAZ DE LA TIERRA!  (REPETIR 3 VECES)."

export const contricion = "Jesús, mi Señor y redentor, yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ello he ofendido a un Dios tan bueno. Prometo firmemente no volver a pecar. Amén."

export const credo = "Creo en Dios Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor; que fue concebido por obra y gracia del Espíritu Santo,  nació de Santa María virgen. Padeció bajo el poder de Poncio Pilato; fue crucificado, muerto y sepultado; descendió a los infiernos. Al tercer día resucitó de entre los muertos. Subió al cielo, y está sentado a la diestra de Dios Padre Todopoderoso. Desde allí vendrá a juzgar a los vivos y a los muertos. Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."


export const misterio_del_dia = () => {
  const today = new Date().getDay()
  if (today === 1 || today === 6) return gozosos
  if (today === 2 || today === 5) return 
  if (today === 3 || today === 0) return
  if (today === 4) return



}



