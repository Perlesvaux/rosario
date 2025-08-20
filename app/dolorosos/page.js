"use client"
import Carousel from '../Carousel.jsx'
import { dolorosos } from '../misterios.js'
import { useWakeLock } from '../hooks.js'

export default function Home() {

  useWakeLock()

  const { lista, nombre } = dolorosos

  return <Carousel items={lista} name={nombre} />

}

