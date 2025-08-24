"use client"
import {useWakeLock, useRegisterSW} from './hooks.js'

export default function RegisterWorker(){
  useWakeLock() 
  useRegisterSW()
  return null
}
