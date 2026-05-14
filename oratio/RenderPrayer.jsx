import { usePrayerContext } from '@/hooks'
import { Contricion, Invocacion, Peticiones, FeEsperanzaCaridad, SenalDeLaCruz, Misterio, DecenaAveMaria, Jaculatorias, Gloria, PadreNuestro } from '.'
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
              if (isSimple) return
              return <Invocacion key={indx} />

            case "contricion":
              if (isSimple) return
            return <Contricion key={indx} />
            case "credo":
            return <Credo key={indx}/>
            case "peticiones":
              if (isSimple) return 
            return <Peticiones key={indx} />

            case "avemarias":
            if (!isSimple) return 
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
              if (isSimple) return
              return <Jaculatorias key={indx} />

            default:
              return `Missing component for: "${each}"`
          }

        }
      )
    }
  </>



}

