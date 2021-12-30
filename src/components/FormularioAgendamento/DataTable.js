import React from "react";
import {Button} from "../../components/Button/Button"
import "./DataTable.css"

const DataTable = () => {
  return (
    //   usar um GET para puxar os agendamentos 
    <>
      <table className="table-agendamento" cellPadding={0} cellSpacing={0} border="1px solid">
        <thead>
          <tr>
            <th>Data</th>
            <th>Tatuador</th>
            <th>Status</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th>21/01/22</th>
                <th>Caio C</th>
                <th>Agendado</th>
                <th><Button>Cancelar</Button></th>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
