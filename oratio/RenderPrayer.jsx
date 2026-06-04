import { usePrayerContext } from '@/hooks'
import { Contricion, Invocacion, Peticiones, FeEsperanzaCaridad, SenalDeLaCruz, Misterio, DecenaAveMaria, Jaculatorias, Gloria, PadreNuestro, Salve, Final, LetaniasLauretanas, LetaniasLauretanasInicio, AveMariaPurisima, Oremos, Faustina, AveMaria, DoxologiaFinal, OracionFinal, PadreEterno, DecenaDolorosaPasion} from '.'
import { Credo } from './Credo'


export function RenderPrayer(){
  const {misterio, currentState, isSimple} = usePrayerContext()
  return <> 
    {

      currentState
      .map( (each, indx)=>
      {

          switch (each) {

            // Rosario[intro]

            case "senal1":
            return <SenalDeLaCruz key={indx} />

            case "invocacion1":
              return <Invocacion key={indx} />

            case "contricion1":
            return <Contricion key={indx} />
            case "credo1":
            return <Credo key={indx}/>
            case "peticiones1":
            return <Peticiones key={indx} />

            case "avemarias3":
            return <FeEsperanzaCaridad key={indx}/>
            


            // Rosario[mysteries]
            case "misterio1":
              return <Misterio misterio={misterio} key={indx}/>

            case "padrenuestro1":
              return  <PadreNuestro key={indx} />

            case "avemaria10":
              return  <DecenaAveMaria key={indx} />

            case "gloria1":
              return <Gloria key={indx} />

            case "jaculatorias1":
              return <Jaculatorias key={indx} />

            case "salve1":
            return <Salve key={indx}/>

            case "final1":
            return <Final key={indx} />


            // Rosario[litanies]
            case "inicio1":
            return <LetaniasLauretanasInicio key={indx}/>

            case "letanias1":
            return <LetaniasLauretanas key={indx} />

            case "oremos1":
            return <Oremos key={indx}/>  

            case "avemariapurisima3":
            return <AveMariaPurisima key={indx}/> 

            case "faustina1":
            return <Faustina key={indx}/> 

            case "avemaria1":
            return <AveMaria key={indx}/> 

            case "doxologiafinal1":
            return <DoxologiaFinal key={indx}/> 

            case "oracionfinal1":
            return <OracionFinal key={indx}/> 


            case "padreeterno1":
            return <PadreEterno key={indx}/>

            case "dolorosapasion10":
            return <DecenaDolorosaPasion key={indx}/>


            default:
              return `Missing component for: "${each}"`

          }

        }
      )
    }
  </>



}
      //Object.keys(currentState)
      //.filter((eachKey)=> eachKey != "actual")
      //.map( (each, indx)=>
