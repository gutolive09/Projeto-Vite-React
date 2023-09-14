import { useNavigate, useParams } from 'react-router-dom'; 
import React from 'react'
import { ListaProdutos } from '../components/ListaProdutos';
import style from "./ExcluirProdutos.module.css"

export default function ExcluirProdutos() {

  document.title = "EXLCUIR PRODUTO"

  const navigate = useNavigate()

  const {id} = useParams();

  const produto = ListaProdutos.filter((produto) => produto.id == id)[0]

  return (
    <>
        <div>
          <h1 className={style.tit}>Excluir Produtos</h1>

          <div className={style.card}>
            <h2>Produto Selecionado</h2>
            <figure>
              <img src={produto.img} alt={produto.desc} />
              <figcaption>{produto.nome} - <span>R$ {produto.preco}</span></figcaption>
            </figure>
          </div>
        </div>
    </>
    
  )
}
