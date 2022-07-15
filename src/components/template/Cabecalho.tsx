import Titulo from "./Titulo"

interface CabecalhoProps{
    titulo: string
    subtitulo: string
   
}

export default function Cabecalho(props: CabecalhoProps){
    return(
        <div className={``}>
            <div className={``}>
                <Titulo titulo={props.titulo} subtitulo={props.subtitulo}></Titulo>
       
            </div>
        </div>
    )
}