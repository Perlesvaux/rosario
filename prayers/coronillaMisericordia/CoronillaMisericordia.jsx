
import CoronillaPrayers from './hyle/CoronillaPrayers.jsx'
import CoronillaIntro from './hyle/CoronillaIntro.jsx'
import CoronillaOutro from './hyle/CoronillaOutro.jsx'


import { useHolyContext } from '@/hooks'

export default function CoronillaMisericordia (){
  const {name, items} = useHolyContext()
  //
  const condition = name==="CORONILLA A LA DIVINA MISERICORDIA"
  //
  return <> 

    { condition && 
      <> 
       <CoronillaIntro  header={name} />
       <CoronillaOutro  header={name} />
      </>
    }

  </>

}
       // {items.map((item, indx) => <CoronillaPrayers key={indx} misterio={item} index={indx} />)}
       //<CoronillaOutro  header={name} />

