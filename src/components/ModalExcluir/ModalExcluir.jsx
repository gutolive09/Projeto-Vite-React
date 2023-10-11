import React, { Component } from "react";
import styles from "./ModalExcluir.module.css";

class ModalExcluir extends Component {
  handleConfirm = () => {

    alert("Item excluído com sucesso!");
    this.props.onClose();
  };

  render() {
    if (this.props.openExcluir) {
      return (
        <div>
          <div>
            <h1>Confirmação de Exclusão</h1>
            <p>Tem certeza de que deseja excluir este item?</p>
            <div>
              <button>Confirmar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ModalExcluir;