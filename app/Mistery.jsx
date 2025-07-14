import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import  { gozosos } from './misterios.js'

export default function Mistery() {
  const misterios_de_hoy = misterio_del_dia()

  return (<>
    {
      misterios_de_hoy.map((misterio, indx)=>
        <div key={indx}>
          <div className="text-cyan-500">{misterio.titulo}</div>
          <div className="text-cyan-500">{misterio.fruto}</div>
          <div className="text-cyan-500">{misterio.leyenda}</div>
          <div className="text-cyan-500">{misterio.l}</div>
          <div className="text-green-700">{misterio.r}</div>

          <div className="text-cyan-700">{padreNuestro.l}</div>
          <div className="text-green-700">{padreNuestro.r}</div>

          <div className="text-cyan-700">{aveMaria.l}</div>
          <div className="text-green-700">{aveMaria.r}</div>

          <div className="text-cyan-700" >{gloria.l}</div>
          <div className="text-green-700" >{gloria.r}</div>

          <div className="text-cyan-700" > {jaculatoria_1.l}</div>
          <div className="text-green-700" >{jaculatoria_1.r}</div>

          <div className="text-cyan-700" > {jaculatoria_2.l}</div>
          <div className="text-green-700" >{jaculatoria_2.r}</div>

        </div>

      )
    }
    

  </>)

}




const misterio_del_dia = () => {
  const today = new Date().getDay()
  if (today === 1 || today === 6) return gozosos


  if (today === 2 || today === 5) return 
  if (today === 3 || today === 0) return
  if (today === 4) return



}
