import { createContext, useContext, 
} from 'react'

export const HolyContext = createContext()

export function useHolyContext () {
  return useContext(HolyContext)
}

