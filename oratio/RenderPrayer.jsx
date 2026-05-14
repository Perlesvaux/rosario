import { usePrayerContext } from '@/hooks'
import { Contricion, Invocacion, Peticiones, FeEsperanzaCaridad, SenalDeLaCruz, Misterio, DecenaAveMaria, Jaculatorias, Gloria, PadreNuestro, Salve, Final } from '.'
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

            // Intro

            case "senal":
            return <SenalDeLaCruz key={indx} />

            case "invocacion":
              return <Invocacion key={indx} />

            case "contricion":
            return <Contricion key={indx} />
            case "credo":
            return <Credo key={indx}/>
            case "peticiones":
            return <Peticiones key={indx} />

            case "avemarias":
            return <FeEsperanzaCaridad key={indx}/>
            


            // Rosario[mysteries]
            case "misterio":
              return <Misterio misterio={misterio} key={indx}/>

            case "padrenuestro":
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








            default:
              return `Missing component for: "${each}"`

          }

        }
      )
    }
  </>



}

