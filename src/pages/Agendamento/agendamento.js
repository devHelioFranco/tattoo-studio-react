import React, {useState} from "react";
import "./agendamento.css";
import DataTable from "../../components/FormularioAgendamento/DataTable";
import Modal from "../../components/Modal/Modal"
// import {NavBtn, NavBtnLink} from "../../components/Nav2/NavBar"
 
import {Button} from "../../components/Button/Button"


const Agendamento = () => {
  const [dropdown, setDropdown] = useState("");
  const showDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    console.log("hidden");
    setDropdown("");
    document.body.removeEventListener("click", closeDropdown);
  };

  return (
    <div className="agendamento">
      <div className="item1">
        <h1>Agendamento</h1>
          <p style={{paddingBottom: '10px'}}>Veja aqui seus agendamentos</p>
          {/* <NavBtn>
            <NavBtnLink to="login">Agendar horario</NavBtnLink>
          </NavBtn> */}
          <DataTable url={'/Agendamento'}/>

      </div>
      <div className="item2">
        {/* <h1>Faca aqui um agendamento</h1>
        <Button onClick={showDropdown}>Agende aqui seu horario</Button>
        <Modal className={dropdown}/> */}
      </div>
      <div className="item3">
        {/* <h1>Agendamento</h1> */}
      </div>
    </div>
  );
};
export default Agendamento;


