import {  
  useReducer,
  useCallback,
  useMemo,
} from 'react'
import { useHolyContext } from '../context/useHolyContext'
import { PRESET, vibrate } from './utils'

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



const rosarioReducer = (state, action) => {


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
      return rosario
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

export function useRosarioStateOf(section) {
  const {state, dispatch, isSimple} = useHolyContext();
  const next = useCallback(()=>{dispatch({type: `advance ${section}`})}, [dispatch, section])
  const prev = useCallback(()=>{dispatch({type: `previous ${section}`})}, [dispatch, section])
  const currentState = isSimple? state.simple[section] : state.complete[section];


  const show = useCallback((to)=> {
    const conditions = updates(state)
    // Build reverse mapping: { "senal": 0, "invocacion": 1, ... }
    const mapping = {};

    for (const [key, value] of Object.entries(conditions[section].previous.cmd[isSimple? "simple": "complete"])) {
      const innerKey = Object.keys(value)[0]; // e.g., "senal", "invocacion", etc.
      mapping[innerKey] = parseInt(key); // Store the index as a number
    }

    return mapping[to] === currentState.actual;
  }


    , [currentState, isSimple, section, state])

  return { show, currentState, next, prev }
}

