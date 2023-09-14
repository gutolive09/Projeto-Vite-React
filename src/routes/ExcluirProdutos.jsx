import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import style from "./ExcluirProdutos.module.css";

export default function ExcluirProdutos() {
  document.title = "EXLCUIR PRODUTO";

  const navigate = useNavigate();

  const { id } = useParams();

  const produto = ListaProdutos.filter((produto) => produto.id == id)[0];

  const handleDelete = (e) =>{
    e.preventDefault();

    let indice;

    // ListaProdutos.forEach((item, index) => {
    //   if(item.id == produto.id){
    //     indice = index
    //   }
    // })

    indice = ListaProdutos.findIndex(item => item.id == produto.id)

    ListaProdutos.splice(indice,1)
    alert("Produto excluído com sucesso")
    navigate("/produtos")
  }

  return (
    <>
      <div>
        <h1 className={style.tit}>Excluir Produtos</h1>

        <div className={style.card}>
          <h2>Produto Selecionado</h2>
          <h3 className={style.alert}>Deseja realmente excluir este produto ?</h3>
          <figure>
            <img src={produto.img} alt={produto.desc} />
            <figcaption>
              {produto.nome} - <span>R$ {produto.preco}</span>
            </figcaption>
          </figure>
          <div className={style.btn}>
            <button onClick={handleDelete}>EXCLUIR</button>
            <button onClick={() => navigate("/produtos")}>CANCELAR</button>
          </div>
        </div>
      </div>
    </>
  );
}
