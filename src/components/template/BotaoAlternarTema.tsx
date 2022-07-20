import { IconeLua, IconeSol } from "../icons"

interface BotaoAlternarTemaProps{
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema}
             className={''} >
            
            <div className={''}>
                {IconeSol}
            </div>
            
            <div className={''}>
               <span> Claro</span>
            </div>
        
        </div>

    ) : (
        <div>
            {IconeLua}
            <div>
                <span>Escuro</span>
            </div>
        </div>

    )

}