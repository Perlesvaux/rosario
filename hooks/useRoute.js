import {
  useReducer,
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react'

import { luminosos, gozosos, gloriosos, dolorosos,
coronillaMisericordia

} from '../prayers'
import { useHolyContext } from './context/useHolyContext'
//import { useHolyContext } from './context/useHolyContext'
//import {  } from './prayers/coronillaMisericordia/morphe/schema.js'


export const misterio_del_dia = () => {
  // Add here new routes, such as 'Coronilla a la Divina Misericordia'
  const today = new Date().getDay()
  console.log(new Date())
  if (today === 1 || today === 6) return gozosos
  if (today === 2 || today === 5) return dolorosos
  if (today === 3 || today === 0) return gloriosos
  if (today === 4) return luminosos
}



const routesReducer = (state, action) => {

  // Add here new routes, such as 'Coronilla a la Divina Misericordia'
  const { type } = action;

  switch (type) {

    case "hoy":
      return misterio_del_dia()

    case "gozosos":
      return gozosos

    case "gloriosos":
      return gloriosos

    case "dolorosos":
      return dolorosos

    case "luminosos":
      return luminosos

    case "misericordia":
      return coronillaMisericordia

    default:
      return dolorosos
  }

}



export function useRoute() {
  const [route, routeDispatch] = useReducer( routesReducer, null, misterio_del_dia )
  const ref = useRef()
  const [isReady, setIsReady] = useState(false)


  const[isSimple, setSimple] = useState(true)
  const toggle = useCallback(() => { setSimple(!isSimple) }, [isSimple])
  //return {isSimple, toggle}

  const { lista, rezo, nombre:name } = route

  useEffect(() => {
    routeDispatch({ type: "hoy" })
    setIsReady(true)
  }, [])

  const backToSquareOne = () => {
    ref.current.scrollTo(0, 0)
  }

  const select = (e) => {
    console.log(e.currentTarget.name)
    routeDispatch({type:e.currentTarget.name})
  }

  const choice = () => {
    if (rezo==='rosario'){
      return isSimple? 'simple' : 'complete'
    }
    return rezo
  }

  const items = useMemo(()=> lista, [lista])

  return {name, items, select, ref, backToSquareOne, isReady, choice, toggle, isSimple}

}




