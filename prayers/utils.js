export const PRESET = {
  hard:[80,9,80,9,80],
  mid: 60,
  soft: 50,
  faint: 40,
}




export const vibrate = (intensity) => {
    if (navigator.vibrate) navigator.vibrate(intensity)
  }



export const LIMIT = {
  avemaria:11,
  dolorosapasion:10
}



//
//const HIGH = (n)=> n+1
//const LOW = (n)=> n-9
//
//const beadCaps = {
//  avemaria:11,
//  dolorosapasion:10
//}
//
//export const LIMIT = {
//  avemaria:{low:LOW(beadCaps.avemaria), high:HIGH(beadCaps.avemaria), normal:beadCaps.avemaria, decrease:1 },
//  dolorosapasion:{low:LOW(beadCaps.dolorosapasion), high:HIGH(beadCaps.dolorosapasion), normal:beadCaps.dolorosapasion, decrease:0 }
//
//}
//
//
//    const floor = (key) => {
//      return count-LIMIT[key].low < 0 
//    }
//
//    const ceil = (key) => {
//      return count >= LIMIT[key].high 
//    }
