import {Prayer, Dialogus, Vox} from '@/components'

export const jaculatorias_finales = [
  {"l":"Sagrado Corazón de Jesús,", "r":"en tí confío."},
  {"l":"Dulce Corazón de María,", "r":"sed la salvación del alma mía. AMÉN"},
  {"l":"En el nombre del Padre, del hijo y del Espíritu Santo.", "r": "AMÉN"},
  {"l":"¡Que la paz del señor sea con nosotros,", "r": "y con su espíritu."},
]

export function Final() {
  return <Prayer title="Final" to="final1">
      <Dialogus titulo="Final">
        <div className="flex flex-col gap-1">
          {jaculatorias_finales.map((letania, indx)=><div  key={indx}><Vox lider={letania.l} respuesta={letania.r} /></div>)}
        </div>
      </Dialogus>
    </Prayer>
}
