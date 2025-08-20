"use client"
import Carousel from '../Carousel.jsx'
import { gozosos } from '../misterios.js'
import { useWakeLock } from '../hooks.js'

export default function Home() {

  useWakeLock()

  const { lista, nombre } = gozosos

  return <Carousel items={lista} name={nombre} />

}


