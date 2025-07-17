import Image from "next/image";
import Prayers from './Prayers.jsx'

const css_lead =     "bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 text-xs "
const css_response = "bg-red-50 border-l-4 border-red-400 px-4 py-2 text-red-900 text-xs"
const css_title =    "text-xs font-bold text-gray-900"
const css_header =   "text-xs font-bold text-gray-900"
const css_article =  "pb-4"
const css_important= "text-indigo-600 font-medium text-xs leading-snug"
const css_misterio = "text-xs font-bold text-rose-700 text-center"


const css_reply = "bg-amber-50 border-l-4 border-amber-400 px-4 py-2 text-amber-900"



export function Introductio ({titulo, leyenda}) {
  return <article className="pb-4 bg-blue-50  px-4 py-2 text-rose-800 rounded-xl"> 
    {titulo && <h2 className={css_title}> {titulo} </h2>}
    {leyenda && <div className="text-black">{leyenda}</div>}
  </article>
}

export function Extra ({titulo, leyenda}) {
  return <article className="pb-4 bg-amber-50  px-4 py-2 text-amber-800 rounded-xl"> 
    {titulo && <h2 className={css_title}> {titulo} </h2>}
    {leyenda && <div className="text-black">{leyenda}</div>}
  </article>
}

export function Dialogus ({titulo, lider, respuesta, children}) {
  return <article className={css_article}> 
    {titulo && <h2 className={css_title}> {titulo} </h2>}
    {lider && respuesta && <Vox lider={lider} respuesta={respuesta}/>}
    {children && children}
  </article>
}

export function Vox ({lider, respuesta}){
  return <>
    <div className={css_lead}>{lider}</div> 
    <div className={css_response}>{respuesta}</div>
  </>
}

export function Susurri ({lider, respuesta}){
  return <>
    <div className={css_lead}>{lider}</div> 
    <div className={css_reply}>{respuesta}</div>
  </>
}

export function Dictum ({lider, respuesta}){
  return <article className="flex flex-row" >
    <div className="bg-teal-50  px-4 py-2 text-teal-800 rounded-tl-xl rounded-bl-xl">{lider}</div> 
    <div className="bg-amber-50  px-4 py-2 text-amber-800 rounded-tr-xl rounded-br-xl">{respuesta}</div>
  </article>
}

export function Mysterium ({ titulo, imagen, fruto, leyenda, l, r, index }){
  //const bgColors = ['bg-pink-50', 'bg-pink-100', 'bg-rose-50', 'bg-rose-100', 'bg-rose-200']
  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']
  // key prop trick to avoid useEffect used here! =D
  return <section className={ `${bgColors[index]}  px-4 py-2 text-rose-800 rounded-xl h-[90vh] overflow-hidden w-full` }>

    <article className="pb-4">
      <Image
        className="mx-auto rounded-xl"
        src={imagen}
        alt={titulo}
        width={203}
        height={225}
        priority
      />
    </article>

    <article className="pb-4 h-[30vh] overflow-hidden">
      <div className="font-bold text-rose-700 text-center text-xs">{titulo}</div>
        <div className= "bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 text-xs ">Fruto del misterio: {fruto}</div>
        <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 text-xs ">{leyenda}</div>
        <Vox lider={l} respuesta={r}/>
    </article>


    <Prayers key={titulo}  />
  </section>
}

export function Titulus ({children}){
  return <h3 className="text-xs font-bold text-rose-700"> {children} </h3>
}

export function Facio ({children}) {
  return <h3 className="text-xs font-bold text-amber-700"> {children} </h3>
}







