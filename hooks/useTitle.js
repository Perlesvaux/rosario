import { useEffect } from "react";


export function useTitle(name){
  useEffect(() => {
    document.title = `Santo Rosario | ${name}`;
  }, [name]);
}






