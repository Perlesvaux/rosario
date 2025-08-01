"use client"
import {gozosos, dolorosos, gloriosos, luminosos} from "./misterios.js"

export const misterio_del_dia = () => {
  const today = new Date().getDay()
  if (today === 1 || today === 6) return gozosos
  if (today === 2 || today === 5) return dolorosos
  if (today === 3 || today === 0) return gloriosos
  if (today === 4) return luminosos
}

