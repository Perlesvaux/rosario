export const PRESET = {
  hard:[80,9,80,9,80],
  mid: 60,
  soft: 50,
  faint: 40,
}




export const vibrate = (intensity) => {
    if (navigator.vibrate) navigator.vibrate(intensity)
  }

