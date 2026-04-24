import { createContext, useContext, 
  useReducer,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from 'react'

//import {requestWakeLock, releaseWakeLock} from './wakelock.js'

//import {useHolyContext, usePrayerContext} from '../hooks'

//import { misterio_del_dia } from './prayers.js'

//import { luminosos, gozosos, gloriosos, dolorosos } from './misterios.js'

import { luminosos, gozosos, gloriosos, dolorosos } from '../hooks'


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

    default:
      return dolorosos
  }

}



export function useRoute() {
  const [route, routeDispatch] = useReducer( routesReducer, null, misterio_del_dia )
  const ref = useRef()
  const [isReady, setIsReady] = useState(false)

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

  const { lista, nombre:name } = route
  const items = useMemo(()=> lista, [lista])

  return {name, items, select, ref, backToSquareOne, isReady}

}




