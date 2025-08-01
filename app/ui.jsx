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

export function Mysterium ({ misterio, index }){
  //const bgColors = ['bg-pink-50', 'bg-pink-100', 'bg-rose-50', 'bg-rose-100', 'bg-rose-200']
  const bgColors = ['bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100']
  // key prop trick to avoid useEffect used here! =D
//h-[95vh]
  return <section className={ `${bgColors[index]}  px-4 py-2 text-rose-800` }>



    <Prayers misterio={misterio} index={index} key={index}  />
  </section>
}
      //<div className="font-bold text-rose-700 text-center text-sm md:text-lg">{titulo}</div>

export function Titulus ({children}){
  return <h3 className="text-sm font-bold text-rose-700 md:text-lg"> {children} </h3>
}

export function Facio ({children}) {
  return <h3 className="text-sm font-bold text-amber-700 md:text-lg"> {children} </h3>
}


export function Left ({onClick}){
  return <button className="col-span-1" onClick={onClick}>
    <svg className="mx-auto"  xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F3F3F3"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
  </button>
}

export function Right ({onClick}){
  return <button className="col-span-1" onClick={onClick}>
    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#f3f3f3"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
  </button>
}


export function Up ({ onClick }){
  return <button  onClick={onClick} className="flex items-center justify-center bg-gray-500 text-black rounded-tl-[35px]"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F3F3F3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
  </button>
}

export function Down ({ onClick }){
  return <button  onClick={onClick} className="flex items-center justify-center  bg-gray-800 text-black rounded-bl-[35px]"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
  </button>
}


export function Add ({ onClick, name }){
  return <button onClick={onClick} name={name} className="py-2 col-span-1 bg-gray-600 text-white rounded text-sm">
    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
  </button> 

}


export function Slide ({ children }){
  return <div className={ `bg-gray-300 relative overflow-hidden w-full flex-shrink-0` } >
    {children}
  </div>
}

export function Frame ({src, alt}){
  return <section className="relative w-full aspect-[812/899]">
    <Image
      className="object-cover object-top"
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  </section>
}

export function Steps({children, header, up, down, left, right}) {
  return <section className="col-span-3 grid grid-cols-3 gap-4">

    <div className="col-span-3 grid grid-cols-7 text-xs text-white/70 text-center bg-gray-800">
      <Left onClick={left}/>
      <div className="col-span-5 h-10 flex items-center justify-center">{header} </div>
      <Right onClick={right}/>
    </div>

    <div className="col-span-2 grid gap-2 ">
      {children}
    </div>

    <div className="col-span-1 grid ">
      <Up onClick={up} />
      <Down onClick={down} />
    </div>

  </section>

}
//overflow-y-auto h-50

export function List({children, header, left, right}) {
  return <section className="col-span-3 grid grid-cols-3 gap-4">

    <div className="col-span-3 grid grid-cols-7 text-xs text-white/70 text-center bg-gray-800">
      <Left onClick={left}/>
      <div className="col-span-5 h-10 flex items-center justify-center">{header} </div>
      <Right onClick={right}/>
    </div>

    <div className="col-span-2 grid gap-2">
      {children}
    </div>

  </section>

}


