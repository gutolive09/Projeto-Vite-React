import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

  console.log(produtoRecuperado)

  return (
    <>
        <h1>EditarProdutos</h1>
        <h2>PRODUTO</h2>
        <p>NOME : {produtoRecuperado.nome}</p>
        <p>DESCRIÇÃO : {produtoRecuperado.desc}</p>
        <p>PREÇO : {produtoRecuperado.preco}</p>

    </>
    
  )
}
