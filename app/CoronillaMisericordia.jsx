
import Prayers from './Prayers.jsx'
import CoronillaIntro from './CoronillaIntro.jsx'
import CoronillaOutro from './CoronillaOutro.jsx'
import Outro from './Outro.jsx'
import Litany from './Litany.jsx'


import { useHolyContext } from '../hooks'

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

  //return <></>
}

