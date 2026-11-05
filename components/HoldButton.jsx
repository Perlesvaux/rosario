"use client"
import { useRef, useEffect } from 'react';

export default function HoldButton() {
  const timerRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const startPress = () => {
    // Prevent multiple timers
    if (timerRef.current) return; 
    
    timerRef.current = setTimeout(() => {
      console.log("Action triggered after 5 seconds!");
      // Your action goes here
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
    <button
      onMouseDown={startPress}
      onMouseUp={cancelPress}
      onMouseLeave={cancelPress}
      onTouchStart={startPress}
      onTouchEnd={cancelPress}
      onTouchCancel={cancelPress}
    >
      Press and hold for 5s
    </button>
  );
}
