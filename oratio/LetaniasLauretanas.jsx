import { Dialogus, Vox, Introductio, Dictum, Prayer } from '@/components'

export function LetaniasLauretanasInicio () {

  return <Prayer title="Inicio" to="inicio">
      <Introductio 
        titulo="Oración previa a Letanías"
        leyenda="¡Oh Señor! Ten misericordia de nosotros. Escucha nuestras súplicas."
      /> 
    </Prayer>
}


export function LetaniasLauretanas(){

  return <Prayer title="Letanías" to="letanias">

      <Dialogus titulo="Letanías">

        <div className="flex flex-col gap-1">
          {letanias_1.map((letania, indx)=><div key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></div>)}

          {letanias_2.map((letania, indx)=><div key={indx}><Dictum  lider={letania.l} respuesta={letania.r} /></div>)}

          {letanias_3.map((letania, indx)=><div key={indx}><Dictum  lider={letania} respuesta="Ruega por nosotros." /></div>)}

          {letanias_4.map((letania, indx)=><div key={indx}><Dictum lider={letania.l} respuesta={letania.r} /></div> )}

          <Vox lider={letanias_final.l} respuesta={letanias_final.r} />

        </div>
      </Dialogus>

    </Prayer>

}



export const letanias_1 = [
  {"l":" Señor, ten piedad,", "r":"Señor, ten piedad"},
  {"l":" Cristo, ten piedad,", "r":"Cristo, ten piedad"},
  {"l":" Señor, ten piedad,", "r":"Señor, ten piedad."},
  {"l":" Cristo, óyenos,", "r":"Cristo, óyenos."},
  {"l":" Cristo, escúchanos,", "r":"Cristo, escúchanos."},
]

export const letanias_2 =  [
  {"l":"Dios Padre celestial, creador del mundo","r":"ten piedad de nosotros."},
  {"l":"Dios Hijo, Redentor del mundo,","r":"Ten piedad de nosotros."},
  {"l":"Dios, Espíritu Santo,", "r":"Ten piedad de nosotros."},
  {"l":"Santísima Trinidad, un solo Dios,", "r":"Ten piedad de nosotros."}
]

export const letanias_3 = [
"Santa María,",
"Santa Madre de Dios,",
"Santa Virgen de las Vírgenes,",
"Madre de Cristo,",
"Madre de la Iglesia,",
"Madre de la misericordia,",
"Madre de la divina gracia,",
"Madre de la esperanza,",
"Madre purísima,",
"Madre castísima,",
"Madre siempre virgen,",
"Madre inmaculada,",
"Madre amable,",
"Madre admirable,",
"Madre del buen consejo,",
"Madre del Creador,",
"Madre del Salvador,",
"Virgen prudentísima,",
"Virgen digna de veneración,",
"Virgen digna de alabanza,",
"Virgen poderosa,",
"Virgen clemente,",
"Virgen fiel,",
"Espejo de justicia,",
"Trono de la sabiduría,",
"Causa de nuestra alegría,",
"Vaso espiritual,",
"Vaso digno de honor,",
"Vaso de insigne devoción,",
"Rosa mística,",
"Torre de David,",
"Torre de marfil,",
"Casa de oro,",
"Arca de la Alianza,",
"Puerta del cielo,",
"Estrella de la mañana,",
"Salud de los enfermos,",
"Refugio de los pecadores,",
"Consuelo de los migrantes,",
"Consoladora de los afligidos,",
"Auxilio de los cristianos,",
"Reina de los Ángeles,",
"Reina de los Patriarcas,",
"Reina de los Profetas,",
"Reina de los Apóstoles,",
"Reina de los Mártires,",
"Reina de los Confesores,",
"Reina de las Vírgenes,",
"Reina de todos los Santos,",
"Reina concebida sin pecado original,",
"Reina asunta a los Cielos,",
"Reina del Santísimo Rosario,",
"Reina de la familia,",
"Reina de la paz."
]

export const letanias_4 = [
  {"l":"Cordero de Dios, que quitas el pecado del mundo,", "r":"Perdónanos, Señor."},
  {"l":"Cordero de Dios, que quitas el pecado del mundo,", "r":"Escúchanos, Señor."},
  {"l":"Cordero de Dios, que quitas el pecado del mundo,", "r":"Ten misericordia de nosotros y danos la paz."}
]

export const letanias_final = {
"l": "Bajo tu amparo nos acogemos, Santa Madre de Dios. No desprecies nuestras súplicas en las necesidades que te presentamos. Antes bien, líbranos siempre de todos los peligros, Virgen gloriosa y bendita.  Ruega por nosotros, Santa Madre de Dios.",
"r": "Para que seamos dignos de alcanzar las promesas y gracias de nuestro Señor Jesucristo. Amén."
}

export const oremos = {
  "l": "Oremos. Te rogamos señor, que nos concedas a nosotros tus siervos, gozar de perpetua  salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada Virgen María, seamos librados de la tristeza presente y disfrutemos de la eterna alegría. Por Jesucristo, nuestro Señor.", "r":"Amén."
}
