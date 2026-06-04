import {  
  useReducer,
  useCallback,
  useMemo,
} from 'react'
import { useHolyContext } from '@/hooks'
import { PRESET, vibrate } from '../../utils'

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


const rosario = {

  complete: {
    intro : {
      elements:[ 'senal1', 'invocacion1', 'contricion1', 'credo1', 'peticiones1' ],
      actual:0,
    },
    outro: {
      elements: [ 'peticiones1', 'padrenuestro1',  'avemarias3', 'gloria1', 'salve1' ],
      actual:0
    },
    //intro : { 
    //  senal1:new Set([0]) , 
    //  invocacion1:new Set([1]), 
    //  contricion1:new Set([2]), 
    //  credo1:new Set([3]), 
    //  peticiones1:new Set([4]) 
    //},
    //mysteries: [
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]),jaculatorias1:new Set([12]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]),jaculatorias1:new Set([12]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]),jaculatorias1:new Set([12]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]),jaculatorias1:new Set([12]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]),jaculatorias1:new Set([12]), actual:-1},
    //],
    //outro: {peticiones1:new Set([5]), padrenuestro1:new Set([6]), avemarias3:new Set([7]), gloria1:new Set([8]), salve1:new Set([9])},
    //litany: {inicio1:new Set([10]), letanias1:new Set([11]), oremos1:new Set([12]), avemariapurisima3: new Set([13]), final1:new Set([14])},
    //actual:0,
  },


  simple: {

    intro : {
      elements:[ 'senal1', 'credo1', 'avemarias3', 'gloria1' ],
      actual:0,
    },
    outro: {
      elements: [ 'salve1', 'final1' ],
      actual:0
    },
    //intro : { senal1:new Set([0]), credo1:new Set([1]), avemarias3:new Set([2]) , gloria1:new Set([3]) },
    //mysteries: [
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]), actual:-1},
    //  {misterio1:new Set([-1]),padrenuestro1:new Set([0]),avemaria10:new Set([1,2,3,4,5,6,7,8,9,10]),gloria1:new Set([11]), actual:-1},
    //],
    //outro:{ salve1:new Set([4]), final1:new Set([5]) },
  }

}



//const updates =(state)=> {
//  return {
//
//    mysteries:{
//
//      previous: {
//        cmd:{
//
//          complete:{
//            0: { misterio: false },
//            1: { padrenuestro: false },
//            11: { avemaria: false },
//            12: { gloria: false },
//            13: { jaculatorias: false },
//          },
//          simple:{
//            0: { misterio: false },
//            1: { padrenuestro: false },
//            11: { avemaria: false },
//            12: { gloria: false },
//          }
//        },
//
//        actual: (index)=> {
//          return {
//            complete: state.complete.mysteries[index].actual > 0 ? state.complete.mysteries[index].actual - 1 : 0 ,
//            simple: state.simple.mysteries[index].actual > 0 ? state.simple.mysteries[index].actual - 1 : 0
//          }
//        }
//
//      } ,
//      advance: {
//        cmd:{
//
//          complete:{
//            1: { misterio: true },
//            2: { padrenuestro: true },
//            12: { avemaria: true },
//            13: { gloria: true },
//            14: { jaculatorias: true },
//          },
//          simple:{
//            1: { misterio: true },
//            2: { padrenuestro: true },
//            12: { avemaria: true },
//            13: { gloria: true },
//          }
//        },
//
//        actual: (index)=> {
//          return {
//            complete: state.complete.mysteries[index].actual < 14 ? state.complete.mysteries[index].actual + 1 : 14,
//            simple: state.simple.mysteries[index].actual < 14 ? state.simple.mysteries[index].actual + 1 : 14
//          }
//        }
//      }
//
//    },
//
//
//    intro:{
//
//      previous: {
//
//        cmd:{
//
//          complete:{
//            0: { senal: false },
//            1: { invocacion: false },
//            2: { contricion: false },
//            3: { credo: false },
//            4: { peticiones: false },
//          },
//
//          simple:{
//            0: { senal: false },
//            1: { credo: false },
//            2: { avemarias: false },
//            3: { gloria: false },
//          }
//        },
//
//        actual: {
//          complete: state.complete.intro.actual > 0 ? state.complete.intro.actual - 1 : 0,
//          simple: state.simple.intro.actual > 0 ? state.simple.intro.actual - 1 : 0
//        }
//      },
//
//      advance: {
//        cmd:{
//
//          complete:{
//            1: { senal: true },
//            2: { invocacion: true },
//            3: { contricion: true },
//            4: { credo: true },
//            5: { peticiones: true },
//          },
//          simple: {
//            1: { senal: true },
//            2: { credo: true },
//            3: { avemarias: true },
//            4: { gloria: true },
//          }
//        },
//
//        actual: {
//          complete:state.complete.intro.actual < 5 ? state.complete.intro.actual + 1 : 5,
//          simple:state.simple.intro.actual < 5 ? state.simple.intro.actual + 1 : 5
//        }
//      },
//    },
//
//
//    outro: {
//      previous: {
//        cmd:{
//          complete:{
//            0: { peticiones: false },
//            1: { padrenuestro: false },
//            2: { avemarias: false },
//            3: { gloria: false },
//            4: { salve: false },
//          },
//
//          simple:{
//            0: { salve: false },
//            1: { final: false },
//          }
//        },
//
//        actual:{
//          complete: state.complete.outro.actual > 0 ? state.complete.outro.actual - 1 : 0,
//          simple: state.simple.outro.actual > 0 ? state.simple.outro.actual - 1 : 0
//        }
//
//
//      },
//
//      advance: {
//
//        cmd:{
//          complete:{
//            1: { peticiones: true },
//            2: { padrenuestro: true },
//            3: { avemarias: true },
//            4: { gloria: true },
//            5: { salve: true },
//          },
//
//          simple:{
//            1: { salve: true },
//            2: { final: true },
//          }
//
//        },
//
//
//
//        actual: {
//          complete:state.complete.outro.actual < 5 ? state.complete.outro.actual + 1 : 5,
//          simple: state.simple.outro.actual < 5 ? state.simple.outro.actual + 1 : 5
//        }
//
//      }
//    },
//
//    litany: {
//      previous:{
//        cmd:{
//
//          complete:{
//            0: { inicio: false },
//            1: { letanias: false },
//            2: { oremos: false },
//            3: { avemariapurisima: false },
//            4: { final: false },
//          }
//        },
//
//        actual: {
//          complete: state.complete.litany.actual > 0 ? state.complete.litany.actual - 1 : 0
//        }
//
//      },
//
//      advance: {
//        cmd:{
//
//          complete:{
//            1: { inicio: true },
//            2: { letanias: true },
//            3: { oremos: true },
//            4: { avemariapurisima: true },
//            5: { final: true },
//          }
//        },
//
//        actual: {
//          complete: state.complete.litany.actual < 5 ? state.complete.litany.actual + 1 : 5
//        }
//      }
//    }
//
//
//
//
//  }
//
//
//
//
//}



const rosarioReducer = (state, action) => {


  const { type, index } = action;

  //const { intro, outro, litany, mysteries } = updates(state)

  switch (type) {

    case "advance":{
      vibrate(PRESET.soft)
      return {...state,  
        complete: {...state.complete, actual: state.complete.actual++}, 
        simple: {...state.simple, actual: state.simple.actual++} 
      }
    }

    case "previous": {
      vibrate(PRESET.faint)
      //return {...state, actual: state.actual--}
      //return {...state,  complete: {...state.complete, actual: state.complete.actual--} }
      return {...state,  
        complete: {...state.complete, actual: state.complete.actual--}, 
        simple: {...state.simple, actual: state.simple.actual--} 
      }
    }

    case "advance mysteries": {
      //const actual = mysteries.advance.actual(index)
      // Indicates GLORIA reached
      //if (actual === LIMIT.dolorosapasion+1) vibrate(PRESET.hard)
        // Indicates ongoing AVEMARIA
        //else if (actual > 2 && actual <= 10) vibrate(PRESET.mid)
          // Normal button press feedback
          //else vibrate(PRESET.soft)
      //return commitEach(state, mysteries.advance.cmd, actual, "mysteries", index);
      //const actual = (state.mysteries[index].actual >= 10) ? 11 : state.mysteries[index].actual++

      const actual = state.complete.mysteries[index].actual++
      if (actual===11) vibrate(PRESET.hard) 
      vibrate(PRESET.mid)
      return {
        ...state,
        complete:{...state.complete,

          mysteries: state.complete['mysteries'].map((item, i) => 
            index === i ? { ...item, actual: actual  } : item
          )


        }
        
      }


    }

    case "previous mysteries": {
      vibrate(PRESET.faint)
      return {
        ...state,
        mysteries: state['mysteries'].map((item, i) => 
          index === i ? { ...item, actual: state.mysteries[i].actual--  } : item
        )
      }
    }


    default:
      return `undefined case: ${type}`
  }
}



export function useRosario(){
  const [ state, dispatch ] = useReducer( rosarioReducer, rosario )
  return { state, dispatch }
}



export function useRosarioStateOfEach(section, index){
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: `advance ${section}`, index: index }) },  [dispatch, index, section])
  const prev = useCallback(()=>{ dispatch({type: `previous ${section}`, index: index }) }, [dispatch, index, section])
  //const currentState = state[section][index] 
  //const currentState = isSimple?state.simple[section][index] :  state.complete[section][index]

  const currentState = isSimple? state.simple[section][index] : state.complete[section][index];
  const globalActual = isSimple? state.simple[section][index].actual : state.complete[section][index].actual;


  const show = useCallback((to)=> {
    //console.log(currentState)
    console.log(currentState[to])
    console.log(globalActual)
    //return currentState[to].has(globalActual)
  }
  , [currentState])
  return { show, currentState, next, prev }
}


export function useRosarioStateOf(section) {
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{dispatch({type: `advance`})}, [dispatch])
  const prev = useCallback(()=>{dispatch({type: `previous`})}, [dispatch])
  //const currentState = state[section]
  const currentState = isSimple? state.simple[section] : state.complete[section];
  const globalActual = isSimple? state.simple.actual : state.complete.actual;
  //
  //const markPrayer = useCallback((to)=>{
  //  return
  //}
  //  ,[])
  //
  //const show = useCallback((to)=> {
  //  //console.log(currentState)
  //  //console.log(to)
  //  //console.log(state)
  //  //return currentState[to].has(globalActual)
  //}
  //, [state, currentState, globalActual])



  const markPrayer = useCallback((to)=>{
    return currentState.actual > currentState.elements.indexOf(to)
  }
  ,[currentState])

  const show = useCallback((to)=> {
    return currentState.elements[currentState.actual]
  }
  , [currentState])
  return { show, currentState, next, prev, markPrayer }



  return { show, currentState, next, prev, markPrayer }
}

//export function useRosarioStateOfEach(section, index){
//  const {state, dispatch, isSimple} = useHolyContext();
//  const next = useCallback(()=>{ dispatch({type: `advance ${section}`, index: index }) },  [dispatch, index, section])
//  const prev = useCallback(()=>{ dispatch({type: `previous ${section}`, index: index }) }, [dispatch, index, section])
//  const currentState = isSimple?state.simple[section][index] :  state.complete[section][index]
//  const show = useCallback((to)=> {
//
//
//    const isAvemaria = (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11)
//    const conditions = updates(state)
//    // Build reverse mapping: { "senal": 0, "invocacion": 1, ... }
//    const mapping = {};
//
//    for (const [key, value] of Object.entries(conditions[section].previous.cmd[isSimple? "simple": "complete"])) {
//      const innerKey = Object.keys(value)[0]; // e.g., "senal", "invocacion", etc.
//      mapping[innerKey] = parseInt(key); // Store the index as a number
//    }
//
//    return mapping[to] === currentState.actual || isAvemaria;
//  }
//
//
//    , [currentState, isSimple, section, state])
//  return { show, currentState, next, prev }
//}
//
//export function useRosarioStateOf(section) {
//  const {state, dispatch, isSimple} = useHolyContext();
//  const next = useCallback(()=>{dispatch({type: `advance ${section}`})}, [dispatch, section])
//  const prev = useCallback(()=>{dispatch({type: `previous ${section}`})}, [dispatch, section])
//  const currentState = isSimple? state.simple[section] : state.complete[section];
//
//
//  const show = useCallback((to)=> {
//    const conditions = updates(state)
//    // Build reverse mapping: { "senal": 0, "invocacion": 1, ... }
//    const mapping = {};
//
//    for (const [key, value] of Object.entries(conditions[section].previous.cmd[isSimple? "simple": "complete"])) {
//      const innerKey = Object.keys(value)[0]; // e.g., "senal", "invocacion", etc.
//      mapping[innerKey] = parseInt(key); // Store the index as a number
//    }
//
//    return mapping[to] === currentState.actual;
//  }
//
//
//    , [currentState, isSimple, section, state])
//
//  return { show, currentState, next, prev }
//}

