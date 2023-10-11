import { Link } from "react-router-dom";
import { AiFillEdit as EditObj } from "react-icons/ai";
import { RiDeleteBin2Fill as DelObj } from "react-icons/ri";
import estilos from "./Produto.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";
import ModalEditar from "../components/ModalEditar/ModalEditar";
import ModalExcluir from "../components/ModalExcluir/ModalExcluir";

export default function Produtos() {
  document.title = "Lista de produtos";

  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        setListaProdutosLocal(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const[open, setOpen] = useState(false)

  const[openEditar, setOpenEditar] = useState(false)
  const[produtoEditado, setProdutoEditado] = useState('')

  const[openExcluir, setOpenExcluir] = useState(false)
  const[produtoExcluido, setProdutoExcluido] = useState('')

  return (
    <>
      <h1>Produtos Informáticos - FIAPO</h1>

      {open ?  <ModalInserir open={true} setOpen={setOpen}/> : ""}

      {openEditar ?  <ModalEditar id={produtoEditado} openEditar={true} setOpen={setOpenEditar}/> : ""}

      {openExcluir ?  <ModalExcluir id={produtoExcluido} openExcluir={true} setOpen={setOpenExcluir}/> : ""}

      <Link className="openModalLink" onClick={() => setOpen(true)}>OPEN-MODAL</Link>

      <table className={estilos.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR/EXCLUIR</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutosLocal.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td>
                <img src={produto.img} alt={produto.desc} />
              </td>
              <td>
                {" "}
                <Link onClick={()=>{
                  setOpenEditar(true)
                  setProdutoEditado(produto.id)}}>
                  <EditObj />
                </Link>{" "}
                |{" "}
                <Link onClick={()=>{
                  setOpenExcluir(true)
                  setProdutoExcluido(produto.id)}}>
                  <DelObj />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
      <Link to={"/criar/produtos"}>Adicionar produto</Link>
    </>
  );
}
