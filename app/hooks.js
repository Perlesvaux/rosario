import { createContext, useContext, 
useReducer,
useRef,
} from 'react'


export const HolyContext = createContext()

export function useHolyContext () {
  return useContext(HolyContext)
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

