import { createContext, useContext, 
  useReducer,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
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

const PRESET = {
  hard:[71,9,71,9,71],
  mid: 60,
  soft: 50,
  faint: 40,
}

const all = {

  complete: {

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

  },


  simple: {

    intro : {
      senal: false,
      credo: false,
      avemarias: false,
      gloria: false,
      actual: 0,
    },
    mysteries: [
      {
        misterio: false,
        padrenuestro: false,
        avemaria: false,
        gloria: false,
        actual: 0,
      },
      {
        misterio: false,
        padrenuestro: false,
        avemaria: false,
        gloria: false,
        actual: 0,
      },
      {
        misterio: false,
        padrenuestro: false,
        avemaria: false,
        gloria: false,
        actual: 0,
      },
      {
        misterio: false,
        padrenuestro: false,
        avemaria: false,
        gloria: false,
        actual: 0,
      },
      {
        misterio: false,
        padrenuestro: false,
        avemaria: false,
        gloria: false,
        actual: 0,
      },


    ],
    outro:{
      salve: false,
      final: false,
      actual: 0,
    },


  }


}









  const updateShallow = (state, updates, actual, section, part) => {
    return {
      [part]: {
        ...state[part],
        [section]: { ...state[part][section], ...updates[part][actual[part]], actual:actual[part] }
      }}
  }

  const updateDeep = (state, updates, actual, section, index, part) => {
    return {
      [part]:{
        ...state[part],
        [section]: state[part][section].map((item, i) => 
          index === i ? { ...item, ...updates[part][actual[part]], actual:actual[part]  } : item
        )
      }
    }
  }



const updates =(state)=> {
  return {

    mysteries:{

      previous: {
        cmd:{

          complete:{
            0: { misterio: false },
            1: { padrenuestro: false },
            11: { avemaria: false },
            12: { gloria: false },
            13: { jaculatorias: false },
          },
          simple:{
            0: { misterio: false },
            1: { padrenuestro: false },
            11: { avemaria: false },
            12: { gloria: false },
          }
        },

        actual: (index)=> {
          return {
            complete: state.complete.mysteries[index].actual > 0 ? state.complete.mysteries[index].actual - 1 : 0 ,
            simple: state.simple.mysteries[index].actual > 0 ? state.simple.mysteries[index].actual - 1 : 0
          }
        }

      } ,
      advance: {
        cmd:{

          complete:{
            1: { misterio: true },
            2: { padrenuestro: true },
            12: { avemaria: true },
            13: { gloria: true },
            14: { jaculatorias: true },
          },
          simple:{
            1: { misterio: true },
            2: { padrenuestro: true },
            12: { avemaria: true },
            13: { gloria: true },
          }
        },

        actual: (index)=> {
          return {
            complete: state.complete.mysteries[index].actual < 14 ? state.complete.mysteries[index].actual + 1 : 14,
            simple: state.simple.mysteries[index].actual < 14 ? state.simple.mysteries[index].actual + 1 : 14
          }
        }
      }

    },


    intro:{

      previous: {

        cmd:{

          complete:{
            0: { senal: false },
            1: { invocacion: false },
            2: { contricion: false },
            3: { credo: false },
            4: { peticiones: false },
          },

          simple:{
            0: { senal: false },
            1: { credo: false },
            2: { avemarias: false },
            3: { gloria: false },
          }
        },

        actual: {
          complete: state.complete.intro.actual > 0 ? state.complete.intro.actual - 1 : 0,
          simple: state.simple.intro.actual > 0 ? state.simple.intro.actual - 1 : 0
        }
      },

      advance: {
        cmd:{

          complete:{
            1: { senal: true },
            2: { invocacion: true },
            3: { contricion: true },
            4: { credo: true },
            5: { peticiones: true },
          },
          simple: {
            1: { senal: true },
            2: { credo: true },
            3: { avemarias: true },
            4: { gloria: true },
          }
        },

        actual: {
          complete:state.complete.intro.actual < 5 ? state.complete.intro.actual + 1 : 5,
          simple:state.simple.intro.actual < 5 ? state.simple.intro.actual + 1 : 5
        }
      },
    },


    outro: {
      previous: {
        cmd:{
          complete:{
            0: { peticiones: false },
            1: { padrenuestro: false },
            2: { avemarias: false },
            3: { gloria: false },
            4: { salve: false },
          },

          simple:{
            0: { salve: false },
            1: { final: false },
          }
        },

        actual:{
          complete: state.complete.outro.actual > 0 ? state.complete.outro.actual - 1 : 0,
          simple: state.simple.outro.actual > 0 ? state.simple.outro.actual - 1 : 0
        }


      },

      advance: {

        cmd:{
          complete:{
            1: { peticiones: true },
            2: { padrenuestro: true },
            3: { avemarias: true },
            4: { gloria: true },
            5: { salve: true },
          },

          simple:{
            1: { salve: true },
            2: { final: true },
          }

        },



        actual: {
          complete:state.complete.outro.actual < 5 ? state.complete.outro.actual + 1 : 5,
          simple: state.simple.outro.actual < 5 ? state.simple.outro.actual + 1 : 5
        }

      }
    },

    litany: {
      previous:{
        cmd:{

          complete:{
            0: { inicio: false },
            1: { letanias: false },
            2: { oremos: false },
            3: { avemariapurisima: false },
            4: { final: false },
          }
        },

        actual: {
          complete: state.complete.litany.actual > 0 ? state.complete.litany.actual - 1 : 0
        }

      },

      advance: {
        cmd:{

          complete:{
            1: { inicio: true },
            2: { letanias: true },
            3: { oremos: true },
            4: { avemariapurisima: true },
            5: { final: true },
          }
        },

        actual: {
          complete: state.complete.litany.actual < 5 ? state.complete.litany.actual + 1 : 5
        }
      }
    }




  }




}




const allReducer = (state, action) => {

  const vibrate = (intensity) => {
    if (navigator.vibrate) navigator.vibrate(intensity)
  }

  const commitEach =(state, updates, actual, section, index)=>{
    // Only for 'mystery' section
    return {
      ...state,
      ...updateDeep(state, updates, actual, section, index, "complete"),
      ...updateDeep(state, updates, actual, section, index, "simple")
    };
  }

  const commit = (state, updates, actual, section)=>{


    if (state.complete[section] && state.simple[section])
    {
      return {
        ...state,
        ...updateShallow(state,updates,actual,section, "complete"),
        ...updateShallow(state, updates, actual, section, "simple")
      };
    }

    // state.simple doesn't have any 'litany' key
    return {
      ...state,
      ...updateShallow(state, updates, actual, section, "complete")
    };
  }

  const { type, index } = action;

  const { intro, outro, litany, mysteries } = updates(state)

  switch (type) {

    case "advance mysteries": {
      const actual = mysteries.advance.actual(index)
      // Indicates GLORIA reached
      if (actual.complete === 12) vibrate(PRESET.hard)
        // Indicates ongoing AVEMARIA
        else if (actual.complete > 2 && actual.complete <= 11) vibrate(PRESET.mid)
          // Normal button press feedback
          else vibrate(PRESET.soft)
      return commitEach(state, mysteries.advance.cmd, actual, "mysteries", index);
    }

    case "previous mysteries": {
      vibrate(PRESET.faint)
      return commitEach(state, mysteries.previous.cmd, mysteries.previous.actual(index), "mysteries", index);
    }

    case "advance intro":{
      vibrate(PRESET.soft)
      return commit(state, intro.advance.cmd, intro.advance.actual, "intro")
    }

    case "previous intro": {
      vibrate(PRESET.faint)
      return commit(state, intro.previous.cmd, intro.previous.actual, "intro")
    }

    case "advance outro": {
      vibrate(PRESET.soft)
      return commit(state, outro.advance.cmd, outro.advance.actual, "outro")
    }

    case "previous outro": {
      vibrate(PRESET.faint)
      return commit(state, outro.previous.cmd, outro.previous.actual, "outro")
    }


    case "advance litany": {
      vibrate(PRESET.soft)
      return commit(state, litany.advance.cmd, litany.advance.actual, "litany")
    }

    case "previous litany": {
      vibrate(PRESET.faint)
      return commit(state, litany.previous.cmd, litany.previous.actual, "litany")
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

  //const {state, dispatch} = useHolyContext()
  //const currentState = state.mysteries[index]
  //const next = useCallback(()=>{ dispatch({type: "advance mystery", index: index }) },  [dispatch, index])
  //const prev = useCallback(()=>{ dispatch({type: "previous mystery", index: index }) }, [dispatch, index])
  //
  //const show = useCallback((to) => {
  //  //if (to === "misterio" && currentState.actual == 0) return true
  //  //if (to === "padrenuestro" && currentState.actual == 1) return true
  //  //if (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11) return true
  //  //if (to === "gloria" && currentState.actual == 12) return true
  //  //if (to === "jaculatorias" && currentState.actual == 13) return true
  //}, [currentState])

  //return { show, currentState, next, prev }

}


export function useShowSimplePrayers (index) {

  //const {simpleState, simpleDispatch} = useHolyContext()
  //const currentState = simpleState.mysteries[index]
  //const next = useCallback(()=>{ simpleDispatch({type: "advance mystery", index: index }) },  [simpleDispatch, index])
  //const prev = useCallback(()=>{ simpleDispatch({type: "previous mystery", index: index }) }, [simpleDispatch, index])
  //
  //const show = useCallback((to) => {
  //  //if (to === "misterio" && currentState.actual == 0) return true
  //  //if (to === "padrenuestro" && currentState.actual == 1) return true
  //  //if (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11) return true
  //  //if (to === "gloria" && currentState.actual == 12) return true
  //}, [currentState])
  //
  //return { show, currentState, next, prev }

}


export function useShowOutro(){

  //const {state, dispatch} = useHolyContext()
  //const next = useCallback(()=>{ dispatch({type: "advance outro"}) }, [dispatch])
  //const prev = useCallback(()=>{ dispatch({type: "previous outro"}) }, [dispatch])
  //const currentState = state.outro
  //
  //const show = useCallback((to) => {
  //  //if (to === "peticiones" && currentState.actual == 0 ) return true 
  //  //if (to === "padrenuestro" && currentState.actual == 1) return true
  //  //if (to === "avemarias" && currentState.actual == 2) return true
  //  //if (to === "gloria" && currentState.actual == 3) return true
  //  //if (to === "salve" && currentState.actual == 4) return true
  //}
  //  , [currentState])
  //
  //return { show, currentState, next, prev }
}




export function useShowSimpleOutro(){

  //const {simpleState, simpleDispatch} = useHolyContext()
  //const next = useCallback(()=>{ simpleDispatch({type: "advance outro"}) }, [simpleDispatch])
  //const prev = useCallback(()=>{ simpleDispatch({type: "previous outro"}) }, [simpleDispatch])
  //const currentState = simpleState.outro
  //
  //const show = useCallback((to) => {
  //  //if (to === "salve" && currentState.actual == 0 ) return true 
  //  //if (to === "final" && currentState.actual == 1) return true
  //}
  //  , [currentState])
  //
  //return { show, currentState, next, prev }
}




export function useStateOfEach(section, index){
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: `advance ${section}`, index: index }) },  [dispatch, index, section])
  const prev = useCallback(()=>{ dispatch({type: `previous ${section}`, index: index }) }, [dispatch, index, section])
  const currentState = isSimple?state.simple[section][index] :  state.complete[section][index]
  const show =(to)=>{ return }
  return { show, currentState, next, prev }
}

export function useStateOf(section) {
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{dispatch({type: `advance ${section}`})}, [dispatch, section])
  const prev = useCallback(()=>{dispatch({type: `previous ${section}`})}, [dispatch, section])
  const currentState = isSimple? state.simple[section] : state.complete[section];
  const show =(to)=>{ 
    if (to === "salve" && currentState.actual == 0 ) return true 
 }
  return { show, currentState, next, prev }
}


export function useShowIntro(){
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: "advance intro" }) }, [dispatch])
  const prev = useCallback(()=>{ dispatch({type: "previous intro" }) }, [dispatch])
  //const currentState = state.intro;
  const currentState = isSimple? state.simple.intro : state.complete.intro;
  const show = useCallback((to) =>  {
    //if (to === "senal" && currentState.actual == 0) return true
    //if (to === "invocacion" && currentState.actual == 1) return true
    //if (to === "contricion" && currentState.actual == 2) return true
    //if (to === "credo" && currentState.actual == 3) return true
    //if (to === "peticiones" && currentState.actual == 4) return true
  }, [currentState])

  return { show, currentState, next, prev }
}



export function useShowLitany(){

  //const {state, dispatch} = useHolyContext();
  //const next = useCallback(()=>{ dispatch({type: "advance litany"}) }, [dispatch]);
  //const prev = useCallback(()=>{ dispatch({type: "previous litany"}) }, [dispatch])
  //const currentState = state.litany;
  //
  //const show = useCallback((to) => {
  //  //if (to === "inicio" && currentState.actual == 0 ) return true 
  //  //if (to === "letanias" && currentState.actual == 1) return true
  //  //if (to === "oremos" && currentState.actual == 2) return true
  //  //if (to === "avemariapurisima" && currentState.actual == 3) return true
  //  //if (to === "final" && currentState.actual == 4) return true
  //}
  //  , [currentState])
  //return { show, currentState, next, prev }

}


export function useToggleSimple(){
  const[isSimple, setSimple] = useState(false)
  const toggle = useCallback(() => { setSimple(!isSimple) }, [isSimple])
  return {isSimple, toggle}
}

