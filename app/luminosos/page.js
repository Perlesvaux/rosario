"use client"
import Carousel from '../Carousel.jsx'
import { luminosos } from '../misterios.js'
import { useWakeLock } from '../hooks.js'

export default function Home() {

  useWakeLock()

  const { lista, nombre } = luminosos

  return <Carousel items={lista} name={nombre} />

}




