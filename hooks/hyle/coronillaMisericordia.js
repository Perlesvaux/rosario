import {  
  useReducer,
  useCallback,
  useMemo,
} from 'react'
import { useHolyContext } from '../context/useHolyContext'
import { PRESET, vibrate } from './utils'

  const updateShallow = (state, updates, actual, section) => {
    return {
        ...state,
        [section]: { ...state[section], ...updates[actual], actual:actual }
      }
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


const coronillaMisericordia = {

    intro : {
      senal: false,
      faustina: false,
      padrenuestro: false,
      avemaria: false,
      credo: false,
      actual: 0,
    },
    mysteries: [
      {
        padreeterno: false,
        dolorosapasion: false,
        actual: 0,
      },
      {
        padreeterno: false,
        dolorosapasion: false,
        actual: 0,
      },
      {
        padreeterno: false,
        dolorosapasion: false,
        actual: 0,
      },
      {
        padreeterno: false,
        dolorosapasion: false,
        actual: 0,
      },
      {
        padreeterno: false,
        dolorosapasion: false,
        actual: 0,
      },

    ],
    outro:{
      doxologiafinal: false,
      oracionfinal: false,
      actual: 0,
    },
}



const updates =(state)=> {
  return {

    intro:{

      previous: {

        cmd:{
          0: { senal: false },
          1: { faustina: false },
          2: { padrenuestro: false },
          3: { avemaria: false },
          4: { credo: false },
        },

        actual: state.intro.actual > 0 ? state.intro.actual - 1 : 0,
        
      },

      advance: {
        cmd:{
            1: { senal: true },
            2: { faustina: true },
            3: { padrenuestro: true },
            4: { avemaria: true },
            5: { credo: true },
        },

        actual: state.intro.actual < 5 ? state.intro.actual + 1 : 5
      },
    },



    outro: {
      previous: {
        cmd:{
          0: { doxologiafinal: false },
          1: { oracionfinal: false },
        },

        actual: state.outro.actual > 0 ? state.outro.actual - 1 : 0,
      },

      advance: {

        cmd:{
          1: { doxologiafinal: true },
          2: { oracionfinal: true },
        },

        actual: state.outro.actual < 2 ? state.outro.actual + 1 : 2,
      }
    },


  }




}



const coronillaMisericordiaReducer = (state, action) => {


  const commitEach =(state, updates, actual, section, index)=>{
    // Only for 'mystery' section
    return {
      ...state,
      ...updateDeep(state, updates, actual, section, index, "complete"),
      ...updateDeep(state, updates, actual, section, index, "simple")
    };
  }

  const commit = (state, updates, actual, section)=>{
    return {
      ...state,
      ...updateShallow(state, updates, actual, section)
    };
  }

  const { type, index } = action;

  const { intro, outro, litany, mysteries } = updates(state)

  switch (type) {


    case "advance intro":{
      vibrate(PRESET.soft)
      return commit(state, intro.advance.cmd, intro.advance.actual, "intro")
    }

    case "previous intro": {
      vibrate(PRESET.faint)
      return commit(state, intro.previous.cmd, intro.previous.actual, "intro")
    }


    case "advance outro":{
      vibrate(PRESET.soft)
      return commit(state, outro.advance.cmd, outro.advance.actual, "outro")
    }

    case "previous outro": {
      vibrate(PRESET.faint)
      return commit(state, outro.previous.cmd, outro.previous.actual, "outro")
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




export function useRosarioStateOfEach(section, index){
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{ dispatch({type: `advance ${section}`, index: index }) },  [dispatch, index, section])
  const prev = useCallback(()=>{ dispatch({type: `previous ${section}`, index: index }) }, [dispatch, index, section])
  const currentState = isSimple?state.simple[section][index] :  state.complete[section][index]
  const show = useCallback((to)=> {


    const isAvemaria = (to === "avemaria" && currentState.actual > 1 && currentState.actual <= 11)
    const conditions = updates(state)
    // Build reverse mapping: { "senal": 0, "invocacion": 1, ... }
    const mapping = {};

    for (const [key, value] of Object.entries(conditions[section].previous.cmd[isSimple? "simple": "complete"])) {
      const innerKey = Object.keys(value)[0]; // e.g., "senal", "invocacion", etc.
      mapping[innerKey] = parseInt(key); // Store the index as a number
    }

    return mapping[to] === currentState.actual || isAvemaria;
  }


    , [currentState, isSimple, section, state])
  return { show, currentState, next, prev }
}

export function useCoronillaMisericordiaStateOf(section) {
  const {coronillaMisericordiaState, coronillaMisericordiaDispatch} = useHolyContext();
  const next = useCallback(()=>{coronillaMisericordiaDispatch({type: `advance ${section}`})}, [coronillaMisericordiaDispatch, section])
  const prev = useCallback(()=>{coronillaMisericordiaDispatch({type: `previous ${section}`})}, [coronillaMisericordiaDispatch, section])
  const currentState = coronillaMisericordiaState[section]

  const show = useCallback((to)=> {
    const conditions = updates(coronillaMisericordiaState)
    // Build reverse mapping: { "senal": 0, "invocacion": 1, ... }
    const mapping = {};

    for (const [key, value] of Object.entries(conditions[section].previous.cmd)) {
      const innerKey = Object.keys(value)[0]; // e.g., "senal", "invocacion", etc.
      mapping[innerKey] = parseInt(key); // Store the index as a number
    }

    return mapping[to] === currentState.actual;
  }
  , [currentState, section, coronillaMisericordiaState])

  return { show, currentState, next, prev }
}


