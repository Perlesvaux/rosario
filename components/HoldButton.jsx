"use client"
import { useRef, useEffect } from 'react';

export function HoldButton({action}) {
  const timerRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const startPress = () => {
    // Prevent multiple timers
    if (timerRef.current) return; 
    
    timerRef.current = setTimeout(() => {
      //console.log("Action triggered after 5 seconds!");
      // Your action goes here
      action()
      timerRef.current = null; 
    }, 5000);
  };

  const cancelPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <button  className="py-2 col-span-1 bg-gray-800 text-white rounded text-sm"
      onMouseDown={startPress}
      onMouseUp={cancelPress}
      onMouseLeave={cancelPress}
      onTouchStart={startPress}
      onTouchEnd={cancelPress}
      onTouchCancel={cancelPress}
    >
      Manten presionado 5s para confirmar
    </button>
  );
}




