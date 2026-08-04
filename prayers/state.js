"use client"

import {  useReducer, useCallback } from 'react'

import { useHolyContext, useBeep } from '@/hooks'
import { useEffect } from 'react';

const rosario = () =>{

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
      trackName:'none', 
      intensity:PRESET.soft ,
    }));
  }

  const essentials = () => {
    return { actual: 0, trackName:'none', intensity:PRESET.soft }
  } 

  const rosario = {

    complete: {
      intro : {
        elements:[ 'senal1', 'invocacion1', 'contricion1', 'credo1', 'peticiones1' ],
        ...essentials(),
      },
      mysteries: beadsFrom(['misterio1', 'padrenuestro1', 'avemaria10', 'gloria1', 'jaculatorias1'], 2),
      outro: {
        elements: [ 'peticiones1', 'padrenuestro1',  'avemarias3', 'gloria1', 'salve1' ],
        ...essentials(),
      },
      litany: {
        elements:['inicio1', 'letanias1', 'oremos1', 'avemariapurisima3', 'final1'],
        ...essentials(),
      },
    },


    simple: {

      intro : {
        elements:[ 'senal1', 'credo1', 'avemarias3', 'gloria1' ],
        ...essentials(),
      },
      mysteries: beadsFrom(['misterio1', 'padrenuestro1', 'avemaria10', 'gloria1'], 2),
      outro: {
        elements: [ 'salve1', 'final1' ],
        ...essentials(),
      },
    },


    misericordia: {
      intro : {
        elements: ['senal1', 'faustina1', 'padrenuestro1', 'avemaria1', 'credo1', ],
        ...essentials(),
      },
      mysteries: beadsFrom(['padreeterno1', 'dolorosapasion10'], 1),
      outro: { 
        elements:[ 'doxologiafinal1', 'oracionfinal1' ],
        ...essentials(),
      }
    }
  }

  // Add here new prayers here such as 'Coronilla a la Divina Misericordia'. key name should match rezo i.e.: misericordia here should match rezo:misericordia


  return rosario

}



const rosarioReducer = (state, action) => {

  const { type, index, section, prayer } = action;

  switch (type) {

    case "advance":{
      const MAX = state[prayer][section].elements.length
      const currentActual = state[prayer][section].actual
      const actual = currentActual + 1
      if (actual > MAX) return state
      //const actual = (MAX>=state[prayer][section].actual)? state[prayer][section].actual++ : MAX
      //vibrate(PRESET.soft)
      return {
        ...state,
        [prayer]: { ...state[prayer],  
          [section]:  { ...state[prayer][section], 
            actual:actual,
            intensity:PRESET.soft,
            
          }
        }
      }
    }

    case "previous":{
      const MIN = 0
      const currentActual = state[prayer][section].actual
      const actual = currentActual - 1
      if (actual < MIN) return state
      //const actual = (MIN<=state[prayer][section].actual)? state[prayer][section].actual-- : MIN
      //vibrate(PRESET.soft)
      return {
        ...state,
        [prayer]: { ...state[prayer],  
          [section]:  { ...state[prayer][section], 
            actual:actual, 
            intensity:PRESET.faint,

          }
        }
      }
    }

    case "advance mysteries": {
      const LIMIT = state[prayer][section][index].limit
      const MAX = state[prayer][section][index].decades.length
      const currentActual = state[prayer][section][index].actual
      const actual = currentActual + 1

      //const actual = (MAX>=state[prayer][section][index].actual)? state[prayer][section][index].actual++ : MAX

      //if (actual===LIMIT) { 
      //  vibrate(PRESET.hard); 
      //} else {
      //  vibrate(PRESET.mid)
      //}

      if (actual>MAX) return state

      return {
        ...state,
        [prayer]: { ...state[prayer],
          [section]: state[prayer][section].map((item, i) => 
            index === i ? { ...item, 
              actual: actual, 
              intensity: actual === LIMIT ? PRESET.hard : PRESET.mid,
              trackName: actual === LIMIT ? 'victory' : 'none',

            } : item
          )
        }
      }
    }

    case "previous mysteries": {
      const MIN=0
      const currentActual = state[prayer][section][index].actual
      const actual = currentActual - 1
      //const actual = (MIN<=state[prayer][section][index].actual)? state[prayer][section][index].actual-- : MIN
      //vibrate(PRESET.faint)

      if (actual<MIN) return state
      return {
        ...state,
        [prayer]: { ...state[prayer],
          [section]: state[prayer][section].map((item, i) => 
            index === i ? { ...item, 
              actual: actual,
              intensity:PRESET.faint,
              trackName: 'none',

            } : item
          )
        }
      }
    }

    case "reset": {
      return rosario()
    }

    default:
      return `undefined case: ${type}`
  }
}



export function useRosario(){
  const [ state, dispatch ] = useReducer( rosarioReducer, null, rosario )
  return { state, dispatch }
}


export function useRosarioState(prayer, section, index = null) {
  const { state, dispatch } = useHolyContext();

  //const  beeper = useBeep()
  
  const isDeepLevel = index !== null;
  const currentState = isDeepLevel 
    ? state[prayer][section][index]
    : state[prayer][section];
  
  const arrayKey = isDeepLevel ? 'decades' : 'elements';
  const advanceType = isDeepLevel ? 'advance mysteries' : 'advance';
  const prevType = isDeepLevel ? 'previous mysteries' : 'previous';


  useEffect(()=>{
    if (currentState)  {

      //if (currentState.trackName) {
      //  console.log(`~ BEEP! ~: ${currentState.trackName}`)
      //  beeper(currentState.trackName)
      //}

      if (currentState.intensity) {
        vibrate(currentState.intensity) ;
        console.log(`vibrating at: ${currentState.intensity}`)
      }
    }


  },[currentState, 
      //beeper, 
    ])



  
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


export const PRESET = {
  hard:[80,9,80,9,80],
  mid: 60,
  soft: 50,
  faint: 40,
}

const vibrate = (intensity) => {
  if (navigator.vibrate) navigator.vibrate(intensity)
}


  //Legacy. No longer used, but very helpful for insight when managing complex state
  //
  //const updateShallow = (state, updates, actual, section, part) => {
  //  return {
  //    [part]: {
  //      ...state[part],
  //      [section]: { ...state[part][section], ...updates[part][actual[part]], actual:actual[part] }
  //    }}
  //}
  //
  //const updateDeep = (state, updates, actual, section, index, part) => {
  //  return {
  //    [part]:{
  //      ...state[part],
  //      [section]: state[part][section].map((item, i) => 
  //        index === i ? { ...item, ...updates[part][actual[part]], actual:actual[part]  } : item
  //      )
  //    }
  //  }
  //}
  //
  //
