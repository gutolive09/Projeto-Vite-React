import { useEffect, useState } from "react";
import"./ModalExcluir.scss";

export default function ModalExcluir(props) {
  const [produtoRecuperado, setProdutoRecuperado] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProdutoRecuperado(data);
      });
  }, [props.id]);


  const handleDelete = () => {
    fetch(`http://localhost:5000/produtos/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(produtoRecuperado),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        props.setOpen(false);
        window.location = "/produtos"
      })
      .catch((error) => console.log(error));
  };
  

  return (
        <>
          <div className="container">
            <h1>Confirmação de Exclusão</h1>
            <p>Tem certeza de que deseja excluir este item?</p>
            <div className="buttons">
              <button onClick={handleDelete} className="btn">Confirmar</button>
              <button className="btn">Cancelar</button>
            </div>
          </div>
        </>
  )
}
