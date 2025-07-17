import Image from "next/image";
import Prayers from './Prayers.jsx'

const css_lead =     "bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 text-sm md:text-base"
const css_response = "bg-red-50 border-l-4 border-red-400 px-4 py-2 text-red-900 text-sm md:text-base"
const css_title =    "text-base md:text-xl font-bold text-gray-900"
const css_header =   "text-xs md:text-lg font-bold text-gray-900"
const css_article =  "pb-4"
const css_important= "text-indigo-600 font-medium text-xs md:text-lg leading-snug"
const css_misterio = "text-xs md:text-lg font-bold text-rose-700 text-center"


const css_reply = "bg-amber-50 border-l-4 border-amber-400 px-4 py-2 text-amber-900"



export function Introductio ({titulo, leyenda}) {
  return <article className="pb-4 bg-blue-50  px-4 py-2 text-rose-800 rounded-xl"> 
    {titulo && <h2 className={css_title}> {titulo} </h2>}
    {leyenda && <div className="text-black text-xs md:text-base">{leyenda}</div>}
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
  return <section className={ `${bgColors[index]}  px-4 py-2 text-rose-800 h-[96vh] overflow-hidden w-full` }>

    <article className="rounded-xl w-full bg-gray-900">
      <Image
        className="mx-auto  h-[206px] w-[150px]"
        src={imagen}
        alt={titulo}
        width={101}
        height={206}
        priority
      />
    </article>

    <article className="pb-4 pt-4 h-[35vh] overflow-hidden">
        <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base font-bold">{titulo}</div>
        <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">Fruto del misterio: {fruto}</div>
        <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{leyenda}</div>
        <div className="bg-teal-50 border-l-4 border-teal-400 px-4 py-1 text-teal-800 text-sm md:text-base">{l}</div>
        <div className=" bg-red-50 border-l-4  border-red-400 px-4 py-1  text-red-800 text-sm md:text-base">{r}</div>
    </article>


    <Prayers key={titulo}  />
  </section>
}
      //<div className="font-bold text-rose-700 text-center text-sm md:text-lg">{titulo}</div>

export function Titulus ({children}){
  return <h3 className="text-sm font-bold text-rose-700 md:text-lg"> {children} </h3>
}

export function Facio ({children}) {
  return <h3 className="text-sm font-bold text-amber-700 md:text-lg"> {children} </h3>
}







