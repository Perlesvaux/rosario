import { createContext, useContext, 
} from 'react'

export const BeadContext = createContext()

export function useBeadContext () {
  return useContext(BeadContext)
}


