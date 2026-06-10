import { memo } from 'react'
import { Pray } from '.'
import { useHolyContext } from '@/hooks'
import introImg from '@/public/intro.webp'
import outroImg from '@/public/outro.webp'
import litanyImg from '@/public/litany.webp'

function Rosario (){
  const {name, items} = useHolyContext()
  return <> 
    <Pray section="intro" header={name} src={introImg}/>
    {
      items.map((item, indx) => 
        <Pray section="mysteries" 
          key={indx} 
          header={item.titulo} 
          src={item.imagen} 
          index={indx} 
          misterio={item} />)
    }
    <Pray section="outro" header={name} src={outroImg} />
    <Pray section="litany" header={`${name} - Letanías`} src={litanyImg} />
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
