# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Mapeando ações com o Router-DOM 
- Criar um módulo com uma lista de Objetos. Um arquivo de nome ListaProdutos.jsx que vai conter uma lista de objetos com os produtos que serão exibidos na tela. Cada produto deve ter um id, nome, preço e uma descrição.
- Lista os produtos na telaw usando o método map() para percorrer a lista de produtos e exibir cada um deles na tela. Os produtos devem ser exibidos em uma tabela no componenteProdutos.jsx.
-  Criando a coluna de editar e excluir, Crie uma coluna na tabela para editar e excluir os produtos. Para isso, crie dois links, uma para editar e outro para excluir. Vamos utilizar o id dos produtos como parâmetro.
- Alterando os textos dos links. Altere o texto dos links para editar e excluir por ícones. Para isso, utilize a biblioteca react-icons.
- Utilizar o Hook useParams() para recuperar o id do produto que foi passado como parâmetro na URL. usando o link para editar, vamos recuperar o id do produto que foi passado como parâmetro na URL. Para isso, utilize o HOOk useParams() do react-router-dom.
