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

  //return { elements, decades: result, actual:0, offset:offset-1, limit};
  return Array.from({ length: 5 }, () => ({
    elements, 
    decades: result, 
    actual: 0, 
    offset: offset - 1, 
    limit: offset + 10,
  }));
}

const rosario = {

  complete: {
    intro : {
      elements:[ 'senal1', 'invocacion1', 'contricion1', 'credo1', 'peticiones1' ],
      actual:0,
    },
    mysteries: beadsFrom(['misterio1', 'padrenuestro1', 'avemaria10', 'gloria1', 'jaculatorias1'], 2),
    outro: {
      elements: [ 'peticiones1', 'padrenuestro1',  'avemarias3', 'gloria1', 'salve1' ],
      actual:0,
    },
    litany: {
      elements:['inicio1', 'letanias1', 'oremos1', 'avemariapurisima3', 'final1'],
      actual:0,
    },
  },


  simple: {

    intro : {
      elements:[ 'senal1', 'credo1', 'avemarias3', 'gloria1' ],
      actual:0,
    },
    mysteries: beadsFrom(['misterio1', 'padrenuestro1', 'avemaria10', 'gloria1'], 2),
    outro: {
      elements: [ 'salve1', 'final1' ],
      actual:0
    },
  }

}


const rosarioReducer = (state, action) => {

  const { type, index, section, prayer } = action;

  switch (type) {

    case "advance":{
      const MAX = state[prayer][section].elements.length
      const actual = (MAX>=state[prayer][section].actual)? state[prayer][section].actual++ : MAX
      vibrate(PRESET.soft)
      return {
        ...state,
        [prayer]: { ...state[prayer],  
          [section]:  { ...state[prayer][section], actual:actual 
          }
        }
      }
    }

    case "previous":{
      const MIN = 0
      const actual = (MIN<=state[prayer][section].actual)? state[prayer][section].actual-- : MIN
      vibrate(PRESET.soft)
      return {
        ...state,
        [prayer]: { ...state[prayer],  
          [section]:  { ...state[prayer][section], actual:actual 
          }
        }
      }
    }

    case "advance mysteries": {
      const MAX = state[prayer][section][index].decades.length
      const LIMIT = state[prayer][section][index].limit
      const actual = (MAX>=state[prayer][section][index].actual)? state[prayer][section][index].actual++ : MAX
      //if (actual===11) { vibrate(PRESET.hard); console.log('HARD!') }
      if (actual===LIMIT) { vibrate(PRESET.hard); console.log('HARD!') }
      vibrate(PRESET.mid)
      return {
        ...state,
        [prayer]: { ...state[prayer],
          [section]: state[prayer][section].map((item, i) => 
            index === i ? { ...item, actual: actual  } : item
          )
        }
      }
    }

    case "previous mysteries": {
      //const MIN = state[prayer][section][index].MIN
      const MIN=0
      const actual = (MIN<=state[prayer][section][index].actual)? state[prayer][section][index].actual-- : MIN
      vibrate(PRESET.faint)
      return {
        ...state,
        [prayer]: { ...state[prayer],
          [section]: state[prayer][section].map((item, i) => 
            index === i ? { ...item, actual: actual  } : item
          )
        }
      }
    }

    case "reset": {
      return state
    }

    default:
      return `undefined case: ${type}`
  }
}



export function useRosario(){
  const [ state, dispatch ] = useReducer( rosarioReducer, rosario )
  return { state, dispatch }
}

export function useRosarioState(prayer, section, index = null) {
  const { state, dispatch } = useHolyContext();
  
  const isDeepLevel = index !== null;
  const currentState = isDeepLevel 
    ? state[prayer][section][index]
    : state[prayer][section];
  
  const arrayKey = isDeepLevel ? 'decades' : 'elements';
  const advanceType = isDeepLevel ? 'advance mysteries' : 'advance';
  const prevType = isDeepLevel ? 'previous mysteries' : 'previous';
  
  const actions = {
    next: useCallback(() => {
      dispatch({ 
        type: advanceType, 
        ...(isDeepLevel && { index }), 
        section, 
        prayer 
      });
    }, [advanceType, isDeepLevel, index, section, prayer, dispatch]),
    
    prev: useCallback(() => {
      dispatch({ 
        type: prevType, 
        ...(isDeepLevel && { index }), 
        section, 
        prayer 
      });
    }, [prevType, isDeepLevel, index, section, prayer, dispatch])
  };
  
  return {
    show: useCallback(() => currentState[arrayKey][currentState.actual], [currentState, arrayKey]),
    currentState,
    markPrayer: useCallback((to) => currentState.actual > currentState[arrayKey].indexOf(to), [currentState, arrayKey]),
    ...actions
  };
}





//export function useRosarioStateOfEach(prayer, section, index){
//  const {state, dispatch} = useHolyContext();
//  const next = useCallback(()=>{ dispatch({type: `advance mysteries`,  index: index, section, prayer }) }, [dispatch, index, section, prayer])
//  const prev = useCallback(()=>{ dispatch({type: `previous mysteries`, index: index, section, prayer }) }, [dispatch, index, section, prayer])
//  console.log("****")
//  console.log(state[prayer])
//  const currentState = state[prayer][section][index] 
//
//  const markPrayer = useCallback((to)=>{
//    return currentState.actual > currentState.decades.indexOf(to)
//  }
//  ,[currentState])
//
//  const show = useCallback(()=> {
//    return currentState.decades[currentState.actual]
//  }
//  , [currentState])
//  return { show, currentState, next, prev, markPrayer }
//}
//
//
//export function useRosarioStateOf(prayer, section) {
//  const {state, dispatch} = useHolyContext();
//  const next = useCallback(()=>{dispatch({type: `advance`,  section, prayer})}, [dispatch, section, prayer])
//  const prev = useCallback(()=>{dispatch({type: `previous`, section, prayer})}, [dispatch, section, prayer])
//  const currentState = state[prayer][section]
//
//  const markPrayer = useCallback((to)=>{
//    return currentState.actual > currentState.elements.indexOf(to)
//  }
//  ,[currentState])
//
//  const show = useCallback(()=> {
//    return currentState.elements[currentState.actual]
//  }
//  , [currentState])
//  return { show, currentState, next, prev, markPrayer }
//}
