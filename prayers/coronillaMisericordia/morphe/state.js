import {  
  useReducer,
  useCallback,
} from 'react'
import { useHolyContext } from '@/hooks'
import { PRESET, LIMIT, vibrate } from '../../utils'

  const updateShallow = (state, updates, actual, section) => {
    return {
        ...state,
        [section]: { ...state[section], ...updates[actual], actual:actual }
      }
  }

const updateDeep = (state, updates, actual, section, index) => {
  return {
    ...state,
    [section]: state[section].map((item, i) => 
      index === i ? { ...item, ...updates[actual], actual:actual  } : item
    )
  }
}


const decades = ['padreeterno1', 
  'dolorosapasion10','dolorosapasion10','dolorosapasion10',
  'dolorosapasion10','dolorosapasion10','dolorosapasion10',
  'dolorosapasion10','dolorosapasion10','dolorosapasion10',
  'dolorosapasion10',
]

const coronillaMisericordia = {
  intro :

  {
    elements: [
      'senal1',
      'faustina1', 
      'padrenuestro1', 
      'avemaria1', 
      'credo1', 
    ],
    actual:0,
  },
  mysteries: [
    { 
      elements: ['padreeterno1', 'dolorosapasion10'],
      decades: decades,
      actual:0
    },
    { 
      elements: ['padreeterno1', 'dolorosapasion10'],
      decades: decades,
      actual:0
    },
    { 
      elements: ['padreeterno1', 'dolorosapasion10'],
      decades: decades,
      actual:0
    },
    { 
      elements: ['padreeterno1', 'dolorosapasion10'],
      decades: decades,
      actual:0
    },
    { 
      elements: ['padreeterno1', 'dolorosapasion10'],
      decades: decades,
      actual:0
    },
  ],

  outro: { 
    elements:[
      'doxologiafinal1', 
      'oracionfinal1',
    ],
    actual:0 
  }
}
//{
//    senal1:new Set([0]) ,
//    faustina1:new Set([1]) , 
//    padrenuestro1:new Set([2]) , 
//    avemaria1:new Set([3]) , 
//    credo1:new Set([4]) , 
//  }


  //outro: {
  //  doxologiafinal1: new Set([5]), 
  //  oracionfinal1: new Set([6])
  //},


//const updates =(state)=> {
//  return {
//
//    intro:{
//
//      previous: {
//
//        cmd:{
//          0: { senal: false },
//          1: { faustina: false },
//          2: { padrenuestro: false },
//          3: { avemaria1: false },
//          4: { credo: false },
//        },
//
//        actual: state.intro.actual > 0 ? state.intro.actual - 1 : 0,
//
//      },
//
//      advance: {
//        cmd:{
//            1: { senal: true },
//            2: { faustina: true },
//            3: { padrenuestro: true },
//            4: { avemaria1: true },
//            5: { credo: true },
//        },
//
//        actual: state.intro.actual < 5 ? state.intro.actual + 1 : 5
//      },
//    },
//
//
//
//    outro: {
//      previous: {
//        cmd:{
//          0: { doxologiafinal: false },
//          1: { oracionfinal: false },
//        },
//
//        actual: state.outro.actual > 0 ? state.outro.actual - 1 : 0,
//      },
//
//      advance: {
//
//        cmd:{
//          1: { doxologiafinal: true },
//          2: { oracionfinal: true },
//        },
//
//        actual: state.outro.actual < 2 ? state.outro.actual + 1 : 2,
//      }
//    },
//
//
//
//    mysteries:{
//
//      previous: {
//        cmd:{
//          0: { padreeterno: false },
//          10: { dolorosapasion: false },
//        },
//
//        actual: (index)=> {
//          return state.mysteries[index].actual > 0 ? state.mysteries[index].actual - 1 : 0 
//        }
//      } ,
//
//      advance: {
//        cmd:{
//          1: { padreeterno: true },
//          11: { dolorosapasion: true },
//        },
//
//        actual: (index)=> {
//          return state.mysteries[index].actual < 11 ? state.mysteries[index].actual + 1 : 11
//        }
//      }
//
//    },
//
//  }
//
////padreEterno = "P
////dolorosaPasion =
//
//}



const coronillaMisericordiaReducer = (state, action) => {

  const { type, index, section } = action;

  switch (type) {

    case "advance":{
      vibrate(PRESET.soft)
      return {
        ...state,
        [section]: 
        { ...state[section], actual:state[section].actual++ }
      }
    }

    case "previous":{
      vibrate(PRESET.soft)
      return {
        ...state,
        [section]: 
        { ...state[section], actual:state[section].actual-- }
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
      const actual = state.mysteries[index].actual++
      if (actual===11) vibrate(PRESET.hard) 
      vibrate(PRESET.mid)
      return {
        ...state,
        mysteries: state['mysteries'].map((item, i) => 
          index === i ? { ...item, actual: actual  } : item
        )
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


    //case "advance outro":{
    //  vibrate(PRESET.soft)
    //  return commit(state, outro.advance.cmd, outro.advance.actual, "outro")
    //}
    //
    //case "previous outro": {
    //  vibrate(PRESET.faint)
    //  return commit(state, outro.previous.cmd, outro.previous.actual, "outro")
    //}
    //
    //
    //
    //case "advance mysteries": {
    //  const actual = mysteries.advance.actual(index)
    //  // Indicates GLORIA reached
    //  if (actual === LIMIT.dolorosapasion+1) vibrate(PRESET.hard)
    //    // Indicates ongoing AVEMARIA
    //    else if (actual > 2 && actual <= 10) vibrate(PRESET.mid)
    //      // Normal button press feedback
    //      else vibrate(PRESET.soft)
    //  return commitEach(state, mysteries.advance.cmd, actual, "mysteries", index);
    //}
    //
    //case "previous mysteries": {
    //  vibrate(PRESET.faint)
    //  return commitEach(state, mysteries.previous.cmd, mysteries.previous.actual(index), "mysteries", index);
    //}


    case "reset": {
      return coronillaMisericordia
    }

    default:
      return `undefined case: ${type}`
  }
}



export function useCoronillaMisericordia(){
  const [ coronillaMisericordiaState, coronillaMisericordiaDispatch ] = useReducer( coronillaMisericordiaReducer, coronillaMisericordia )
  return { coronillaMisericordiaState, coronillaMisericordiaDispatch }
}




export function useCoronillaMisericordiaStateOfEach(section, index){
  const {coronillaMisericordiaState, coronillaMisericordiaDispatch} = useHolyContext();
  const next = useCallback(()=>{ coronillaMisericordiaDispatch({type: `advance ${section}`, index: index }) },  [coronillaMisericordiaDispatch, index, section])
  const prev = useCallback(()=>{ coronillaMisericordiaDispatch({type: `previous ${section}`, index: index }) }, [coronillaMisericordiaDispatch, index, section])
  const currentState = coronillaMisericordiaState[section][index] 

  const markPrayer = useCallback((to)=>{
    //return coronillaMisericordiaState.actual >  currentState.indexOf(to)
    return currentState.actual > currentState.decades.indexOf(to)
    //console.log(currentState.actual)
  }
  ,[currentState])


  const show = useCallback((to)=> {
    //return currentState[to].has(currentState.actual)
    //
    console.log(`in ${index}: showing: ${currentState.decades[currentState.actual]} actual: ${currentState.actual}`)

    return currentState.decades[currentState.actual]
  }
  , [currentState, index])
  return { show, currentState, next, prev, markPrayer }
}


export function useCoronillaMisericordiaStateOf(section) {
  const {coronillaMisericordiaState, coronillaMisericordiaDispatch} = useHolyContext();
  const next = useCallback(()=>{coronillaMisericordiaDispatch({type: `advance`, section:section})}, [coronillaMisericordiaDispatch, section])
  const prev = useCallback(()=>{coronillaMisericordiaDispatch({type: `previous`, section:section} )}, [coronillaMisericordiaDispatch, section])
  const currentState = coronillaMisericordiaState[section]

  const markPrayer = useCallback((to)=>{
    //return coronillaMisericordiaState.actual >  currentState.indexOf(to)
    console.log(currentState.actual)
    return currentState.actual > currentState.elements.indexOf(to)
  }
  ,[currentState])

  const show = useCallback((to)=> {
    //return currentState[to].has(coronillaMisericordiaState.actual)
    //console.log(currentState[coronillaMisericordiaState.actual])
    return currentState.elements[currentState.actual]
  }
  , [currentState])
  return { show, currentState, next, prev, markPrayer }
}


