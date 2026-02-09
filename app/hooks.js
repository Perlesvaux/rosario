import { createContext, useContext, 
useReducer,
useRef,
useEffect,
useCallback,
useMemo,
} from 'react'

import {requestWakeLock, releaseWakeLock} from './wakelock.js'

export const HolyContext = createContext()

export function useHolyContext () {
  return useContext(HolyContext)
}

export const PrayerContext = createContext()

export function usePrayerContext () {
  return useContext(PrayerContext)
}

const all = {
  intro : {
    senal: false,
    invocacion: false,
    contricion: false,
    credo: false,
    peticiones: false,
    actual: 0,
  },
  mysteries: [
    {
      misterio: false,
      padrenuestro: false,
      avemaria: false,
      gloria: false,
      jaculatorias: false,
      actual: 0,
    },
    {
      misterio: false,
      padrenuestro: false,
      avemaria: false,
      gloria: false,
      jaculatorias: false,
      actual: 0,
    },
    {
      misterio: false,
      padrenuestro: false,
      avemaria: false,
      gloria: false,
      jaculatorias: false,
      actual: 0,
    },
    {
      misterio: false,
      padrenuestro: false,
      avemaria: false,
      gloria: false,
      jaculatorias: false,
      actual: 0,
    },
    {
      misterio: false,
      padrenuestro: false,
      avemaria: false,
      gloria: false,
      jaculatorias: false,
      actual: 0,
    },


  ],
  outro:{
    peticiones: false,
    padrenuestro: false,
    avemarias: false,
    gloria: false,
    salve: false,
    actual: 0,
  },
  litany: {
    inicio: false,
    letanias: false,
    oremos: false,
    final: false,
    actual: 0,
  }

}


const allReducer = (state, action) => {

  const vibrate = (intensity) => {
    if (navigator.vibrate) navigator.vibrate(intensity)
  }

  const { type, index } = action;

  switch (type) {

    case "advance mystery": {
      const actual = state.mysteries[index].actual < 14 ? state.mysteries[index].actual + 1 : 14;
      const updates = {
        1: { misterio: true },
        2: { padrenuestro: true },
        12: { avemaria: true },
        13: { gloria: true },
        14: { jaculatorias: true },
      };

    // Indicates GLORIA reached
    if (actual === 12) vibrate([60,10,60,10,60])
    // Indicates ongoing AVEMARIA
    else if (actual > 2 && actual <= 11) vibrate(50)
    // Normal button press feedback
    else vibrate(40)

      return {
        ...state,
        mysteries: state.mysteries.map((mystery, i) => 
          index === i ? { ...mystery, ...updates[actual], actual  } : mystery
        )
      };
    }

    case "previous mystery": {
      const actual = state.mysteries[index].actual > 0 ? state.mysteries[index].actual - 1 : 0;
      const updates = {
        0: { misterio: false },
        1: { padrenuestro: false },
        11: { avemaria: false },
        12: { gloria: false },
        13: { jaculatorias: false },
      };
      vibrate(30)
      return {
        ...state,
        mysteries: state.mysteries.map((mystery, i) => 
          index === i ? { ...mystery, ...updates[actual], actual  } : mystery
        )
      };
    }

    case "advance intro":{
      const actual = state.intro.actual < 5 ? state.intro.actual + 1 : 5;
      const updates = {
        1: { senal: true },
        2: { invocacion: true },
        3: { contricion: true },
        4: { credo: true },
        5: { peticiones: true },
      };
      vibrate(40)
      return {
        ...state,
        intro: { ...state.intro, ...updates[actual], actual } 
      };
    }

    case "previous intro": {
      const actual = state.intro.actual > 0 ? state.intro.actual - 1 : 0;
      const updates = {
        0: { senal: false },
        1: { invocacion: false },
        2: { contricion: false },
        3: { credo: false },
        4: { peticiones: false },
      };
      vibrate(30)
      return {
        ...state,
        intro: { ...state.intro, ...updates[actual], actual } 
      };
    }

    case "advance outro": {
      const actual = state.outro.actual < 5 ? state.outro.actual + 1 : 5;
      const updates = {
        1: { peticiones: true },
        2: { padrenuestro: true },
        3: { avemarias: true },
        4: { gloria: true },
        5: { salve: true },
      };
      vibrate(40)
      return {
        ...state,
        outro: { ...state.outro, ...updates[actual], actual } 
      };
    }

    case "previous outro": {
      const actual = state.outro.actual > 0 ? state.outro.actual - 1 : 0;
      const updates = {
        0: { peticiones: false },
        1: { padrenuestro: false },
        2: { avemarias: false },
        3: { gloria: false },
        4: { salve: false },
      };
      vibrate(30)
      return {
        ...state,
        outro: { ...state.outro, ...updates[actual], actual } 
      };
    }


    case "advance litany": {
      const actual = state.litany.actual < 5 ? state.litany.actual + 1 : 5;
      const updates = {
        1: { inicio: true },
        2: { letanias: true },
        3: { oremos: true },
        4: { avemariapurisima: true },
        5: { final: true },
      };
      vibrate(40)
      return {
        ...state,
        litany: { ...state.litany, ...updates[actual], actual } 
      };
    }

    case "previous litany": {
      const actual = state.litany.actual > 0 ? state.litany.actual - 1 : 0;
      const updates = {
        0: { inicio: false },
        1: { letanias: false },
        2: { oremos: false },
        3: { avemariapurisima: false },
        4: { final: false },
      };
      vibrate(30)
      return {
        ...state,
        litany: { ...state.litany, ...updates[actual], actual } 
      };
    }

    case "reset": {
      return all
    }




    default:
    return `undefined case: ${type}`
  }
}


export function useAll(){
  const [state, dispatch] = useReducer( allReducer, all )
  return { state, dispatch }
}




const mysteries = {
  misterio: false,
  padrenuestro: false,
  avemaria: false,
  gloria: false,
  jaculatorias: false,
  actual: 0,
}

const mysteryReducer = (state, action) => {

  const { prayer, type, fun } = action;

  switch (type) {

    case "next": {
      const actual = state.actual < 14 ? state.actual + 1 : 14;
      const updates = {
        1: { misterio: true },
        2: { padrenuestro: true },
        12: { avemaria: true },
        13: { gloria: true },
        14: { jaculatorias: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { misterio: false },
        1: { padrenuestro: false },
        11: { avemaria: false },
        12: { gloria: false },
        13: { jaculatorias: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    default:
    return `undefined case: ${type}`
  }
}

export function useMystery() {
  const [state, dispatch] = useReducer( mysteryReducer, mysteries )
  const singlePress = () => dispatch({type: "next"})
  const goBack = () => dispatch({type:"previous"})
  return {state, singlePress, goBack }
}




const outro = {
  peticiones: false,
  padrenuestro: false,
  fe: false,
  esperanza: false,
  caridad: false,
  gloria: false,
  salve: false,
  actual: 0,
}

const outroReducer = (state, action)=> {
  const {type} = action

  switch (type){

    case "next": {
      const actual = state.actual < 7 ? state.actual + 1 : 7;
      const updates = {
        1: { peticiones: true },
        2: { padrenuestro: true },
        3: { fe: true },
        4: { esperanza: true },
        5: { caridad: true },
        6: { gloria: true },
        7: { salve: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { peticiones: false },
        1: { padrenuestro: false },
        2: { fe: false },
        3: { esperanza: false },
        4: { caridad: false },
        5: { gloria: false },
        6: { salve: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }
  }
}


export function useOutro() {
  const [state, dispatch] = useReducer( outroReducer, outro )
  const singlePress = () => dispatch({type: "next"})
  const goBack = () => dispatch({type:"previous"})
  return {state, singlePress, goBack }
}



const intro = {
  senal: false,
  invocacion: false,
  contricion: false,
  credo: false,
  peticiones: false,
  actual: 0,
}

const introReducer = (state, action) => {

  const { type } = action;

  switch (type) {

    case "next": {
      const actual = state.actual < 5 ? state.actual + 1 : 5;
      const updates = {
        1: { senal: true },
        2: { invocacion: true },
        3: { contricion: true },
        4: { credo: true },
        5: { peticiones: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { senal: false },
        1: { invocacion: false },
        2: { contricion: false },
        3: { credo: false },
        4: { peticiones: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

}
}



export function useIntro () {
  const [state, dispatch] = useReducer( introReducer, intro)
  const singlePress = () => dispatch({type: "next"})
  const goBack = () => dispatch({type:"previous"})
  return {state, singlePress, goBack }
}



const litany = {
  inicio: false,
  letanias: false,
  oremos: false,
  final: false,
  actual: 0,
}


const litanyReducer = (state, action) => {

  const { type } = action;

  switch (type) {

    case "next": {
      const actual = state.actual < 5 ? state.actual + 1 : 5;
      const updates = {
        1: { inicio: true },
        2: { letanias: true },
        3: { oremos: true },
        4: { avemariapurisima: true },
        5: { final: true },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

    case "previous": {
      const actual = state.actual > 0 ? state.actual - 1 : 0;
      const updates = {
        0: { inicio: false },
        1: { letanias: false },
        2: { oremos: false },
        3: { avemariapurisima: false },
        4: { final: false },
      };
      return {
        ...state,
        actual,
        ...updates[actual] // only applies if match
      };
    }

}
}


export function useLitany () {
  const [state, dispatch] = useReducer( litanyReducer, litany)
  const singlePress = () => dispatch({type: "next"})
  const goBack = () => dispatch({type:"previous"})
  return {state, singlePress, goBack }
}


export function useWakeLock() {
  useEffect(()=>{
    // Request wake lock when component mounts
    requestWakeLock()

    // handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible'){
        requestWakeLock()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      // Release wake lock when component unmounts
      releaseWakeLock()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }

  }
    , [])
}



//import { misterio_del_dia } from './prayers.js'

import { luminosos, gozosos, gloriosos, dolorosos } from './misterios.js'



export const misterio_del_dia = () => {
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
  const routes = misterio_del_dia()
  const [route, routeDispatch] = useReducer( routesReducer, routes, ()=> misterio_del_dia() )
  const ref = useRef()

  const backToSquareOne = () => {
    ref.current.scrollTo(0, 0)
  }

  const select = (e) => {
    console.log(e.currentTarget.name)
    routeDispatch({type:e.currentTarget.name})
  }

  const { lista, nombre:name } = route
  const items = useMemo(()=> lista, [lista])




  

  return {name, items, select, ref, backToSquareOne}
  
  
}



export function useRegisterSW(){

  useEffect(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js', { scope: '/' })
          .then((registration) => console.log('scope is: ', registration.scope));
      }
    }, []);

}


export function useTitle(name){
  useEffect(() => {
    document.title = `Santo Rosario | ${name}`;
  }, [name]);
}




const ok = (intensity) => {
  if (navigator.vibrate) navigator.vibrate(intensity)
  return true
}


export function useShowPrayers (index) {

  const {state, dispatch} = useHolyContext()
  const currentState = state.mysteries[index]
  const next = useCallback(()=>{ dispatch({type: "advance mystery", index: index }) },  [dispatch, index])
  const prev = useCallback(()=>{ dispatch({type: "previous mystery", index: index }) }, [dispatch, index])

  const show = useCallback((to) => {
    if (to === "misterio" && currentState.actual == 0) return true
    if (to === "padrenuestro" && currentState.actual == 1) return true
    if (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11) return true
    if (to === "gloria" && currentState.actual == 12) return true
    if (to === "jaculatorias" && currentState.actual == 13) return true
    }, [currentState])

  return { show, currentState, next, prev }

}


export function useShowOutro(){

  const {state, dispatch} = useHolyContext()
  const next = useCallback(()=>{ dispatch({type: "advance outro"}) }, [dispatch])
  const prev = useCallback(()=>{ dispatch({type: "previous outro"}) }, [dispatch])
  const currentState = state.outro

  const show = useCallback((to) => {
    if (to === "peticiones" && currentState.actual == 0 ) return true 
    if (to === "padrenuestro" && currentState.actual == 1) return true
    if (to === "avemarias" && currentState.actual == 2) return true
    if (to === "gloria" && currentState.actual == 3) return true
    if (to === "salve" && currentState.actual == 4) return true
  }
    , [currentState])

  return { show, currentState, next, prev }
}


export function useShowIntro(){
  const {state, dispatch} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: "advance intro" }) }, [dispatch])
  const prev = useCallback(()=>{ dispatch({type: "previous intro" }) }, [dispatch])
  const currentState = state.intro;

  const show = useCallback((to) =>  {
    if (to === "senal" && currentState.actual == 0) return true
    if (to === "invocacion" && currentState.actual == 1) return true
    if (to === "contricion" && currentState.actual == 2) return true
    if (to === "credo" && currentState.actual == 3) return true
    if (to === "peticiones" && currentState.actual == 4) return true
  }, [currentState])

  return { show, currentState, next, prev }
}


export function useShowLitany(){

  const {state, dispatch} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: "advance litany"}) }, [dispatch]);
  const prev = useCallback(()=>{ dispatch({type: "previous litany"}) }, [dispatch])
  const currentState = state.litany;

  const show = useCallback((to) => {
    if (to === "inicio" && currentState.actual == 0 ) return true 
    if (to === "letanias" && currentState.actual == 1) return true
    if (to === "oremos" && currentState.actual == 2) return true
    if (to === "avemariapurisima" && currentState.actual == 3) return true
    if (to === "final" && currentState.actual == 4) return true
  }
, [currentState])
  return { show, currentState, next, prev }

}
