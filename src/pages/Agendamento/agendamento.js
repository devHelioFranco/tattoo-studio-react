import React from "react";
import "./agendamento.css";
import DataTable from "../../components/FormularioAgendamento/DataTable";
// import {NavBtn, NavBtnLink} from "../../components/Nav2/NavBar"


const Agendamento = () => {

  return (
    <div className="agendamento">
      <div className="item1">
        <h1>Agendamento</h1>
          <p style={{paddingBottom: '10px'}}>Veja aqui seus agendamentos</p>
          {/* <NavBtn>
            <NavBtnLink to="login">Agendar horario</NavBtnLink>
          </NavBtn> */}
          <DataTable />
      </div>
      <div className="item2">
        {/* <h1>Agendamento</h1> */}
      </div>
      <div className="item3">
        {/* <h1>Agendamento</h1> */}
      </div>
    </div>
  );
};
export default Agendamento;


