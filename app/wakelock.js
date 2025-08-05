let wakeLock = null;
export const requestWakeLock = async () => {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake lock is active!');
      wakeLock.addEventListener('release', ()=>{ console.log('Wake lock released!') });
    }
  } 
  catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
}

export const releaseWakeLock = async () => {
  if (wakeLock !== null) {
    await wakeLock.release();
    wakeLock = null;
  }
}


