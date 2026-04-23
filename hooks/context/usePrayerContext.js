import { createContext, useContext, 
} from 'react'

export const PrayerContext = createContext()

export function usePrayerContext () {
  return useContext(PrayerContext)
}

