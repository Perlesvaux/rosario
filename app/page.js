"use client"
import Carousel from './Carousel.jsx'
import { misterio_del_dia } from './prayers.js'
import { useWakeLock } from './hooks.js'

export default function Home() {

  useWakeLock()

  const { lista:misterios, nombre } = misterio_del_dia()

  return <Carousel items={misterios} name={nombre} />
}
