import { createContext, useContext, 
useReducer
} from 'react'

export const MysteryContext = createContext()

export function useMysteryContext () {
  return useContext(MysteryContext)
}

export const OutroContext = createContext()

export function useOutroContext() {
  return useContext(OutroContext)
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




