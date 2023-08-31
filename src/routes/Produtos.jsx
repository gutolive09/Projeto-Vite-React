import React from 'react'

export default function Produtos() {
  return (
    <>
        <h1>Produtos Informáticos - FIAPO</h1>

        <table>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
          </tr>
          <tbody>

          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>PRODUTOS</td>
            </tr>
          </tfoot>
        </table>
    </>
  )
}
