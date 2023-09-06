import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {

  document.title = "EDITAR PRODUTO"

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

  return (
    <>
        <div>
          <form>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <label htmlFor="idNome">Nome: </label>
                <input type="text" name='nome' id='idNome' defaultValue={produtoRecuperado.nome}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição: </label>
                <input type="text" name='desc' id='idDesc' defaultValue={produtoRecuperado.desc}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço: </label>
                <input type="text" name='preco' id='idPreco' defaultValue={produtoRecuperado.preco}/>
              </div>
            </fieldset>
            <div>
              <button>Editar</button>
            </div>
          </form>
        </div>


    </>
    
  )
}
