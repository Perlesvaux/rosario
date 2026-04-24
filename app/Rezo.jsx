
import introImg from '../public/intro.webp'
import { Slide, Frame } from './ui.jsx'
import { useHolyContext  } from '../hooks'
//name==="hoy" || name==="gozosos" || name==="gloriosos" || name==="dolorosos" || name==="luminosos"

export default function Rezo ({children}) {

  
  
  const {isReady} = useHolyContext()

  return <>

    {
      isReady
        ?
        <>
          {children}
        </>
        :
        <>
          <Slide>
            <Frame
              src={introImg}
              alt="Bienvenido!"
            />
          </Slide>
          <div className="w-screen text-center"> Espere ... </div>
        </>
    }
  </>
}
