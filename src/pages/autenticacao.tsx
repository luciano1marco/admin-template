import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

//-------------------------------------------------------------------------
export default function Autenticacao(){
    
    const { cadastrar, login, loginGoogle } = useAuth()
    const [erro,setErro] = useState(null)
    const[modo, setModo] = useState<'login' | 'cadastro'>('login')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    
    function exibirErro(msg, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter(){
        if(modo === 'login'){
            console.log('login')
            exibirErro('Ocorreu um erro no login')
        } else{
            console.log('cadastrar')
            exibirErro('Ocorreu um erro no Cadastro')
        }
    }
//-------------------------------------------------------------------------
    async function submeter(){
        try{
            if(modo === 'login'){
                await login(email,senha)
             } else{
                 await cadastrar(email, senha)
             }
        }catch(e){
            console.log(e)
            exibirErro(e?.message ?? 'Erro desconhecido')

        }
    }
//-------------------------------------------------------------------------
    return(
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img    src="https://source.unsplash.com/random" 
                        alt="Imagem da tela de autenticação" 
                        className="h-screen w-full object-cover " />
            </div>
            <div className={`m-10 w-full md:w-1/2 w-1/3 `}>
<<<<<<< HEAD
                    <h1 className={`text-3xl font-bold mb-5`}>
                            {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na plataforma'}
                    </h1>

                    {erro ? ( 
                        <div className={`   flex items-center
                                        bg-red-400  text-white py-3 px-5 my-2
                                        border border-red-700 rounded-lg   `}>
                             {IconeAtencao()}
                             <span className={`ml-3 text-sm`}>{erro}</span>
                        </div>


                    ) : (false )}  

                    <AuthInput
                        label="Email"
                        tipo="email"
                        valor={email}
                        valorMudou={setEmail}
                        obrigatorio
                    />
                    <AuthInput
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        valorMudou={setSenha}
                        obrigatorio
                    />
                    {/*<AuthInput
                        label="Confirmar Senha"
                        tipo="password"
                        valor={senha}
                        valorMudou={setSenha}
                        obrigatorio
                        naoRenderizarQuando= {false}
                    /> */}
                    <button onClick={submeter} 
                            className={`  w-full bg-indigo-500 hover:bg-indigo-400
                                        text-white rounded-lg px-4 py-3 mt-6  
                                    `}>
                        {modo === 'login' ? 'Entrar' : 'Cadastrar' }
                    </button>
=======
                <h1 className={`text-3xl font-bold mb-5 `}>
                    {modo === 'login' 
                            ? 'Entre com sua conta' 
                            : 'Cadastre-se na plataforma'}
                </h1>
>>>>>>> 9bb3d776f4c7ced399f14b137b4bd7624891cdb6

                {erro ? (   <div className={` flex items-center
                                bg-red-400 text-white py-3 px-5 my-2
                                border border-red-700 rounded-lg `}>
                                {IconeAtencao()}
                                <span className={` ml-3 `}>{erro}</span>
                            </div>
                        )
                      : (false)
                }
           
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />
                {/*<AuthInput
                    label="Confirmar Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                    naoRenderizarQuando= {false}
                /> */}
                <button onClick={submeter} 
                        className={`  w-full bg-indigo-500 hover:bg-indigo-400
                                    text-white rounded-lg px-4 py-3 mt-6  
                                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar' }
                </button>

                <hr className={` my-6 border-gray-300 w-full`}/>

                <button onClick={loginGoogle} 
                        className={`  w-full bg-red-500 hover:bg-red-400
                                    text-white rounded-lg px-4 py-3 
                                `}>
                    Entrar com Google
                </button>
                
                {modo === 'login' ? 
                        (
                            <p className="mt-8"> 
                                Novo por Aqui?
                                <a onClick={() => setModo('cadastro')}
                                    className={` text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                                > Crie uma Conta gratis</a>
                            </p>   
                     ):(
                            <p className="mt-8"> 
                                Já faz parte da comunidade?
                                <a onClick={() => setModo('login')}
                                    className={` text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                                > Entre com suas credenciais</a>
                            </p> 
                        )
                    }
            </div>
        </div>
    )
}