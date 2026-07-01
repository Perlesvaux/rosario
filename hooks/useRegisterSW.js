"use client"

import { useEffect } from "react";

export function useRegisterSW() {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      "serviceWorker" in navigator
    ) 
    {
      console.log("registration should occur here")
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);
}
