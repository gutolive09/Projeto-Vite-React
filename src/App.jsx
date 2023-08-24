 import Cabecalho from "./components/Cabecalho"
 import Rodape from "./components/Rodape"
 import Conteudo from "./components/Conteudo"
import ViteLogo from "./assets/vite.svg"

 export default function App(){

  let altViteLogo = "Logo do Vite"

  return (

   <>
    {/*Vamos criar um cabeçalho com um header, um h1 com um titulo indicativo sobre o projeto e uma lista ul com 3 links*/}
    <Cabecalho/>
    {/* Vamos criar uma seção de conteúdo com uma div e 3 parágrafos com cada um tendo 3 linhas de lorem ipsum. Abaixo destes parágrafos vamos adicionar uma imagem*/}
    <Conteudo viteLogoProps={ViteLogo} altViteLogoProps={altViteLogo}/>
    {/* Vamos criar uma seção de rodapé com uma div e uma lista ul com 3 itens com links para redes sociais. Uma parargafo com o seguinte texto: Todos os meus direitos reservados - 2023, adicione o codigo do simbolo de copyright */}
    <Rodape/>
   </>
  )

 }