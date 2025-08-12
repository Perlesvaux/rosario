import Image from "next/image";
import Prayers from './Prayers.jsx'

const css_lead =     "bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 text-sm md:text-base"
const css_response = "bg-red-50 border-l-4 border-red-400 px-4 py-2 text-red-900 text-sm md:text-base"
const css_title =    "text-base md:text-xl font-bold text-gray-900"
const css_header =   "text-sm md:text-lg font-bold text-gray-900"
const css_article =  "pt-4"
//const css_article =  "pb-4"
const css_important= "text-indigo-600 font-medium text-sm md:text-lg leading-snug"
const css_misterio = "text-sm md:text-lg font-bold text-rose-700 text-center"
const css_reply = "bg-amber-50 border-l-4 border-amber-400 px-4 py-2 text-amber-900 text-sm"

const titleGray = "text-lg md:text-xl font-bold text-gray-700"
const lightGrayBox = "bg-gray-50 border-l-4 border-gray-400 px-4 py-2 text-gray-800 text-base md:text-base"
const darkGrayBox = "bg-gray-700 border-l-4 border-gray-900 px-4 py-2 text-gray-50 text-base md:text-base"

export function Introductio ({titulo, leyenda}) {
  return <article className="pt-4"> 
    {titulo && <h2 className={titleGray}> {titulo} </h2>}
    {leyenda && <div className={lightGrayBox}>{leyenda}</div>}
  </article>
}

export function Dialogus ({titulo, lider, respuesta, children}) {
  return <article className="pt-4"> 
    {titulo && <h2 className={titleGray}> {titulo} </h2>}
    {lider && respuesta && <>
      <div className={lightGrayBox}>
        {lider}
      </div> 
      <div className={darkGrayBox}>
        {respuesta}
      </div>
    </>}
    {children && children}
  </article>
}

export function Vox ({lider, respuesta}){
  return <>
    <div className={lightGrayBox}>{lider}</div> 
    <div className={darkGrayBox}>{respuesta}</div>
  </>
}

    //<div className={css_lead}>{lider}</div> 
    //<div className={css_response}>{respuesta}</div>


export function Extra ({titulo, leyenda}) {
  return <article className="pb-4 bg-amber-50  px-4 py-2 text-amber-800 rounded-xl"> 
    {titulo && <h2 className={css_title}> {titulo} </h2>}
    {leyenda && <div className="text-black">{leyenda}</div>}
  </article>
}

export function Susurri ({lider, respuesta}){
  return <>
    <div className={css_lead}>{lider}</div> 
    <div className={css_reply}>{respuesta}</div>
  </>
}

export function Dictum ({lider, respuesta}){
  return <article className="grid grid-cols-2" >
    <div className={`col-span-1 ${lightGrayBox}`}>{lider}</div> 
    <div className={`col-span-1 ${darkGrayBox}`}>{respuesta}</div>
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
  return <button onClick={onClick} name={name} className="py-2 col-span-1 bg-gray-800 text-white rounded text-sm">
    <svg className="mx-auto animate-pulse" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" opacity=".90" fill="#F3F3F3"><path d="M336-144v-192H144v-288h192v-192h288v192h192v288H624v192H336Zm72-72h144v-192h192v-144H552v-192H408v192H216v144h192v192Zm72-264Z"/></svg>
  </button> 

}

    //<svg className="mx-auto animate-pulse" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F3F3F3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>

export function Slide ({ children }){
  return <div className={ `bg-gray-300 relative overflow-hidden w-full flex-shrink-0 h-full snap-start snap-always` } >
    {children}
  </div>
}

export function Frame ({src, alt, advance, retrocede}){
  return <section className="relative w-full aspect-[812/899]">

    <div className="absolute w-full z-20">
      <div className="relative w-full aspect-[812/899] flex ">
        <div className="w-1/2 bg-teal-50/33 " onDoubleClick={retrocede}></div>
        <div className="w-1/2 bg-red-50/33 " onClick={advance} ></div>
      </div>
    </div>

    <Image
      className="object-cover object-top"
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL="data:image/png;base64,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
NH1O/VCE/wfNGh8DwcuyWAAAAABJRU5ErkJggg=="
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


