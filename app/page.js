"use client"
import { useEffect } from 'react'
import Carousel from './Carousel.jsx'
import { misterio_del_dia } from './prayers.js'
import { useWakeLock } from './hooks.js'



export default function Home() {
useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  useWakeLock()

  const { lista:misterios, nombre } = misterio_del_dia()

  return <Carousel items={misterios} name={nombre} />
}
