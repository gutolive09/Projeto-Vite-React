import React from "react";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded by - RM550548</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/editar/produtos/1">Editar Produto - 1</Link>
          </li>
          <li>
            <Link to="/editar/produtos/2">Editar Produto - 2</Link>
          </li>
          <li>
            <Link to="/editar/produtos/3">Editar Produto - 3</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
