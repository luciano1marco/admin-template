import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
   const { alternarTema} = useAppData()
   
   return (
     <Layout   titulo="Notificações" 
               subtitulo="Gerenciar Notificações">
         <button onClick={alternarTema}>Mudar Tema</button>
     </Layout>
   
  )
}
