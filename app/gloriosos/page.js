"use client"
import Carousel from '../Carousel.jsx'
import { gloriosos } from '../misterios.js'
import { useWakeLock } from '../hooks.js'

export default function Home() {

  useWakeLock()

  const { lista, nombre } = gloriosos

  return <Carousel items={lista} name={nombre} />

}



