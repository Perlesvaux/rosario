import { Dialogus, Vox, Slide, Frame,  Prayer, Steps, Beads  } from '@/components' 


export function Misterio({misterio}){

  return <Prayer title="Misterio" to="misterio"  > 
    <article className="pt-4">
      <h2 className="text-base md:text-xl font-bold text-gray-900">Misterio</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base font-bold">{misterio.titulo}</div>
      <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">Fruto del misterio: {misterio.fruto}</div>
      <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">{misterio.leyenda}</div>
      <div className="bg-gray-50 border-l-4 border-gray-400 px-4 py-1 text-gray-800 text-sm md:text-base">{misterio.l}</div>
      <div className="bg-gray-700 border-l-4 border-gray-900 px-4 py-1 text-gray-50 text-sm md:text-base">{misterio.r}</div>
    </article>
  </Prayer>
}
