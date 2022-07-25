
interface AuthInputProps{
    label: string
    valor:any
    tipo: 'text' | 'email' | 'password'
    obrigatorio?:boolean
    naoRenderizarQuando?:boolean
    valorMudou: (novoValor:any) => void
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? null : (
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input  type={props.tipo ?? 'text'} 
                    required= {props.obrigatorio}
                    value={props.valor}
                    onChange={e => props.valorMudou?.(e.target.value)}
                    />
        </div>
    )
}