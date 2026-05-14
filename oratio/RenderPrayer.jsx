
import {PadreNuestro} from './PadreNuestro'
import {Gloria} from './Gloria'
import {Jaculatorias} from './Jaculatorias'
import {DecenaAveMaria} from './DecenaAveMaria'
import {Misterio} from './Misterio'
import { usePrayerContext } from '@/hooks'


export function RenderPrayer(){
  const {misterio, currentState, isSimple} = usePrayerContext()
  return <> 
    {
      Object.keys(currentState)
      .filter((eachKey)=> eachKey != "actual")
      .map( (each, indx)=>
      {

          switch (each) {
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

