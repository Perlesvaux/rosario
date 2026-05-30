import { usePrayerContext } from '@/hooks'
import { Contricion, Invocacion, Peticiones, FeEsperanzaCaridad, SenalDeLaCruz, Misterio, DecenaAveMaria, Jaculatorias, Gloria, PadreNuestro, Salve, Final, LetaniasLauretanas, LetaniasLauretanasInicio, AveMariaPurisima, Oremos, Faustina, AveMaria, DoxologiaFinal, OracionFinal, PadreEterno, DecenaDolorosaPasion} from '.'
import { Credo } from './Credo'


export function RenderPrayer(){
  const {misterio, currentState, isSimple} = usePrayerContext()
  return <> 
    {

      Object.keys(currentState)
      .filter((eachKey)=> eachKey != "actual")
      .map( (each, indx)=>
      {

          switch (each) {

            // Rosario[intro]

            case "senal1":
            return <SenalDeLaCruz key={indx} />

            case "invocacion":
              return <Invocacion key={indx} />

            case "contricion":
            return <Contricion key={indx} />
            case "credo1":
            return <Credo key={indx}/>
            case "peticiones":
            return <Peticiones key={indx} />

            case "avemarias":
            return <FeEsperanzaCaridad key={indx}/>
            


            // Rosario[mysteries]
            case "misterio":
              return <Misterio misterio={misterio} key={indx}/>

            case "padrenuestro1":
              return  <PadreNuestro key={indx} />

            case "avemaria":
              return  <DecenaAveMaria key={indx} />

            case "gloria":
              return <Gloria key={indx} />

            case "jaculatorias":
              return <Jaculatorias key={indx} />

            case "salve":
            return <Salve key={indx}/>

            case "final":
            return <Final key={indx} />


            // Rosario[litanies]
            case "inicio":
            return <LetaniasLauretanasInicio key={indx}/>

            case "letanias":
            return <LetaniasLauretanas key={indx} />

            case "oremos":
            return <Oremos key={indx}/>  

            case "avemariapurisima":
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
