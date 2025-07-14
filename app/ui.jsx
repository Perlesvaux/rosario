const css_lead = "bg-teal-50 border-l-4 border-teal-400 px-4 py-2 text-teal-800 "
const css_response = "bg-red-50 border-l-4 border-red-400 px-4 py-2 text-red-900"
const css_title = "text-2xl font-bold text-gray-900"
const css_header = "text-4xl font-bold text-gray-900"
const css_article = "pb-4"
const css_important = "text-indigo-600 font-medium text-lg leading-snug"
const css_misterio = "text-2xl font-bold text-rose-700 text-center"

export function Introductio ({titulo, leyenda}) {
  return <article className={css_article}> 
    <h2 className={css_title}> {titulo} </h2>
    <div className="text-black">{leyenda}</div>
  </article>
}

export function Dialogus ({titulo, lider, respuesta, children}) {
  return <article className={css_article}> 
    <h2 className={css_title}> {titulo} </h2>
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

export function Mysterium ({ titulo, fruto, leyenda, l, r }){
  return <>
    <article className={css_article}>
      <div className={css_misterio}>{titulo}</div>
      <div className={css_lead}>Fruto del misterio: {fruto}</div>
      <div className={css_lead}>{leyenda}</div>
      <Vox lider={l} respuesta={r}/>
    </article>

  </>

}

export function Titulus ({children}){
  return <h3 className="text-1xl font-bold text-rose-700"> {children} </h3>
}





