"use client";

import { useCallback } from "react";
import { useEffect, useRef } from "react";

export function useBeep() {
    const sfx = useRef(null);

  useEffect(() => {
    sfx.current = {
      victory:new Audio("/victory.ogg"),
      finished: new Audio("/completion.ogg") 
    }
  }, []);

    const beep = useCallback( (trackName) =>{
        if (trackName==='none') return
        if (!sfx.current) return;
        sfx.current[trackName].currentTime = 0;
        sfx.current[trackName].play().catch(() => {});
    }, [])
    return beep;
}
