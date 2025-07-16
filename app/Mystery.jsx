import { padreNuestro, aveMaria, gloria, jaculatoria_1, jaculatoria_2 } from './prayers.js'
import { Dialogus, Vox, Mysterium, Titulus } from './ui.jsx' 
//import Mysteries from './Mysteries.jsx'


export default function Mystery({ misterio, index }) {
  return <>

    <Mysterium {...misterio} index={index} />

  </>

}

//export default function Mystery({ misterio }) {
//  return <section className="bg-rose-50  px-4 py-2 text-rose-800 rounded-xl">
//
//    <Mysterium {...misterio} />
//
//    <Dialogus>
//      <Titulus>Padre Nuestro</Titulus>
//      <Vox lider={padreNuestro.l}  respuesta={padreNuestro.r} />
//    </Dialogus>
//
//    <Dialogus>
//      <Titulus>Ave María (x10)</Titulus>
//      <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
//    </Dialogus>
//
//    <Dialogus>
//      <Titulus>Gloria</Titulus>
//      <Vox lider={ gloria.l } respuesta={ gloria.r } />
//    </Dialogus>
//
//    <Dialogus>
//
//      <Titulus>Jaculatorias</Titulus>
//
//      <Vox
//        lider={jaculatoria_1.l}
//        respuesta={jaculatoria_1.r}
//      />
//
//      <Vox
//        lider={jaculatoria_2.l}
//        respuesta={jaculatoria_2.r}
//      />
//
//  </Dialogus>
//  </section>
//
//}




  //return (<>
  //  {
  //    misterios.map((misterio, indx)=>
  //      <section className="bg-rose-50  px-4 py-2 text-rose-800 rounded-xl"  key={indx}>
  //
  //        <Mysterium {...misterio} />
  //
  //        <Dialogus>
  //          <Titulus>Padre Nuestro</Titulus>
  //          <Vox lider={padreNuestro.l}  respuesta={padreNuestro.r} />
  //        </Dialogus>
  //
  //        <Dialogus>
  //          <Titulus>Ave María (x10)</Titulus>
  //          <Vox lider={ aveMaria.l } respuesta={ aveMaria.r } />
  //        </Dialogus>
  //
  //        <Dialogus>
  //          <Titulus>Gloria</Titulus>
  //          <Vox lider={ gloria.l } respuesta={ gloria.r } />
  //        </Dialogus>
  //
  //        <Dialogus>
  //
  //          <Titulus>Jaculatorias</Titulus>
  //
  //          <Vox
  //            lider={jaculatoria_1.l}
  //            respuesta={jaculatoria_1.r}
  //          />
  //
  //          <Vox
  //            lider={jaculatoria_2.l}
  //            respuesta={jaculatoria_2.r}
  //          />
  //
  //      </Dialogus>
  //
  //
  //      </section>
  //
  //    )
  //  }
  //
  //
  //</>)
