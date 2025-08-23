"use client"
import Carousel from './Carousel.jsx'
import { useWakeLock, useRegisterSW } from './hooks.js'

export default function Home() {

  useRegisterSW()

  useWakeLock()

  return <Carousel />
}
