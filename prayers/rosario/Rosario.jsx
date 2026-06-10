import Prayers from './hyle/Prayers.jsx'
import Intro from './hyle/Intro.jsx'
import Outro from './hyle/Outro.jsx'
import Litany from './hyle/Litany.jsx'
import Pray from './Pray.jsx'
import { memo } from 'react'

import introImg from '@/public/intro.webp'
import outroImg from '@/public/outro.webp'
import litanyImg from '@/public/litany.webp'
//
//import { RenderPrayer } from '@/oratio'
//import { Slide, Frame, Steps } from '@/components' 

import { useHolyContext, PrayerContext } from '@/hooks'


function Rosario (){
  const {name, items} = useHolyContext()
  return <> 
    <Pray header={name} src={introImg} section="intro" />
    {items.map((item, indx) => <Pray key={indx} header={item.titulo} src={item.imagen} section="mysteries" index={indx} misterio={item} />)}
    <Pray header={name} src={outroImg} section="outro" />
    <Pray header={`${name} - Letanías`} src={litanyImg} section="litany" />
  </>

}

export default memo(Rosario)


    //<Intro header={name} />
    //{items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
    //<Outro header={name} />
    //<Litany header={name}/>
//
//export default function Rosario (){
//  const {name, items} = useHolyContext()
//
//  //const condition = name==="GOZOSOS" || name==="GLORIOSOS" || name==="DOLOROSOS" || name==="LUMINOSOS"
//
//  return <> 
//    <Intro header={name} />
//    {items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
//    <Outro header={name} />
//    <Litany header={name}/>
//  </>
//
//}
