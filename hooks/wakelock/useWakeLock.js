import { useEffect } from 'react'
import {requestWakeLock, releaseWakeLock} from './wakelock.js'
export function useWakeLock() {
  useEffect(()=>{
    // Request wake lock when component mounts
    requestWakeLock()

    // handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible'){
        requestWakeLock()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      // Release wake lock when component unmounts
      releaseWakeLock()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }

  }
    , [])
}

