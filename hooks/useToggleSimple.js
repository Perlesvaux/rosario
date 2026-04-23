import {useState, useCallback} from 'react'

export function useToggleSimple(){
  const[isSimple, setSimple] = useState(false)
  const toggle = useCallback(() => { setSimple(!isSimple) }, [isSimple])
  return {isSimple, toggle}
}

