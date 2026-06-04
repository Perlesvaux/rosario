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


function beadsFrom(elements, offset) {
  const result = [];

  for (const item of elements) {
    // Extract the number at the end of the string
    const match = item.match(/\d+$/);
    if (match) {
      const count = parseInt(match[0], 10);
      // Append the item 'count' times to the result
      for (let i = 0; i < count; i++) {
        result.push(item);
      }
    }
  }

  return { elements, decades: result, actual:offset, MIN:offset};
}


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
    { ...beadsFrom(['padreeterno1', 'dolorosapasion10'], 0)},
    { ...beadsFrom(['padreeterno1', 'dolorosapasion10'], 0)},
    { ...beadsFrom(['padreeterno1', 'dolorosapasion10'], 0)},
    { ...beadsFrom(['padreeterno1', 'dolorosapasion10'], 0)},
    { ...beadsFrom(['padreeterno1', 'dolorosapasion10'], 0)},
  ],

  outro: { 
    elements:[
      'doxologiafinal1', 
      'oracionfinal1',
    ],
    actual:0 
  }
}


const coronillaMisericordiaReducer = (state, action) => {

  const { type, index, section } = action;

  switch (type) {

    case "advance":{
      const MAX = state[section].elements.length
      const actual = (MAX>=state[section].actual)? state[section].actual++ : MAX
      vibrate(PRESET.soft)
      return {
        ...state,
        [section]: 
        { ...state[section], actual:actual }
      }
    }

    case "previous":{
      const MIN = 0
      const actual = (MIN<=state[section].actual)? state[section].actual-- : MIN
      vibrate(PRESET.soft)
      return {
        ...state,
        [section]: 
        { ...state[section], actual:actual }
      }
    }

    case "advance mysteries": {
      const MAX = state[section][index].decades.length
      const actual = (MAX>=state[section][index].actual)? state[section][index].actual++ : MAX
      if (actual===11) { vibrate(PRESET.hard); console.log('HARD!') }
      vibrate(PRESET.mid)
      return {
        ...state,
        [section]: state[section].map((item, i) => 
          index === i ? { ...item, actual: actual  } : item
        )
      }
    }

    case "previous mysteries": {
      const MIN = state[section][index].MIN
      const actual = (MIN<=state[section][index].actual)? state[section][index].actual-- : MIN
      vibrate(PRESET.faint)
      return {
        ...state,
        [section]: state[section].map((item, i) => 
          index === i ? { ...item, actual: actual  } : item
        )
      }
    }

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
  const next = useCallback(()=>{ coronillaMisericordiaDispatch({type: `advance mysteries`,  index: index, section }) },  [coronillaMisericordiaDispatch, index, section])
  const prev = useCallback(()=>{ coronillaMisericordiaDispatch({type: `previous mysteries`, index: index, section }) },  [coronillaMisericordiaDispatch, index, section])
  const currentState = coronillaMisericordiaState[section][index] 

  const markPrayer = useCallback((to)=>{
    return currentState.actual > currentState.decades.indexOf(to)
  }
  ,[currentState])

  const show = useCallback(()=> {
    return currentState.decades[currentState.actual]
  }
  , [currentState])
  return { show, currentState, next, prev, markPrayer }
}


export function useCoronillaMisericordiaStateOf(section) {
  const {coronillaMisericordiaState, coronillaMisericordiaDispatch} = useHolyContext();
  const next = useCallback(()=>{coronillaMisericordiaDispatch({type: `advance`, section:section})}, [coronillaMisericordiaDispatch, section])
  const prev = useCallback(()=>{coronillaMisericordiaDispatch({type: `previous`, section:section} )}, [coronillaMisericordiaDispatch, section])
  const currentState = coronillaMisericordiaState[section]

  const markPrayer = useCallback((to)=>{
    return currentState.actual > currentState.elements.indexOf(to)
  }
  ,[currentState])

  const show = useCallback(()=> {
    return currentState.elements[currentState.actual]
  }
  , [currentState])
  return { show, currentState, next, prev, markPrayer }
}


