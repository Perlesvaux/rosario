"use client"
import {useWakeLock, useRegisterSW} from '../hooks'

export default function RegisterWorker(){
  useWakeLock() 
  useRegisterSW()
  return null
}
