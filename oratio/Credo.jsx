import { Introductio, Prayer } from '@/components' 
export function Credo () {
  return <Prayer title="Credo de los Apóstoles" to="credo1" >
    <Introductio
      titulo="Credo de los Apóstoles"
      leyenda={ "Creo en Dios Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor; que fue concebido por obra y gracia del Espíritu Santo,  nació de Santa María virgen. Padeció bajo el poder de Poncio Pilato; fue crucificado, muerto y sepultado; descendió a los infiernos. Al tercer día resucitó de entre los muertos. Subió al cielo, y está sentado a la diestra de Dios Padre Todopoderoso. Desde allí vendrá a juzgar a los vivos y a los muertos. Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."}
    />
  </Prayer>
}
