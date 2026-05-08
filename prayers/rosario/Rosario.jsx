import Prayers from './Prayers.jsx'
import Intro from './Intro.jsx'
import Outro from './Outro.jsx'
import Litany from './Litany.jsx'


import { useHolyContext } from '../hooks'

export default function Rosario (){
  const {name, items} = useHolyContext()

  const condition = name==="GOZOSOS" || name==="GLORIOSOS" || name==="DOLOROSOS" || name==="LUMINOSOS"

  return <> 

    { condition && 
      <> 
        <Intro header={name} />
        {items.map((item, indx) => <Prayers key={indx} misterio={item} index={indx} />)}
        <Outro header={name} />
        <Litany header={name}/>
      </>
    }

  </>

}

