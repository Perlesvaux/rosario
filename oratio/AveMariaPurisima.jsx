import {Prayer, Dialogus, Dictum} from '@/components'

export function AveMariaPurisima () {

  return <Prayer title="Ave Maria Purisima" to="avemariapurisima3">
      <Dialogus titulo="Ave María Purisima">
        <div className="flex flex-col gap-1">
          {aveMariaPurisima.map((letania, indx)=> <div key={indx}><Dictum lider={letania.l} respuesta={letania.r} /> </div> )}
        </div>
      </Dialogus>
    </Prayer>
}

export const aveMariaPurisima =  [
  {"l": "Ave Maria purísima" ,  "r":"sin pecado concebida"},
  {"l": "Ave Maria purísima" ,  "r":"sin pecado concebida"},
  {"l": "Ave Maria purísima" ,  "r":"sin pecado concebida"},
]
