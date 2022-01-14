import React, { useState, useEffect } from "react";
import {Button} from "../Button/Button"
import "./DataTable.css"
import {busca, removeItem, agendaItem} from '../../services/api'
import axios from "axios";
import moment from "moment";
import Modal from "../../components/Modal/Modal"


const Datatable = ({url}) =>{
  // const [dropdown, setDropdown] = useState("");
  // const showDropdown = () => {
  //   console.log("show");
  //   //se clicar no botão, modal aparece
  //   setDropdown("show");
  //   document.body.addEventListener("click", closeDropdown);
  // }

  // const closeDropdown = event => {
  //   console.log("hidden");
  //   setDropdown("");
  //   document.body.removeEventListener("click", closeDropdown);
  // };

  const [agendamentos, setAgendamentos] = useState([])

  useEffect(()=>{
    busca(url, setAgendamentos)
    // removeItem(url)
    // agendaItem(url)


},[])
 var userId = localStorage.getItem('id')


    return (
    //   usar um GET para puxar os agendamentos 
    

    <section className="agendamento">
      {                      console.log(agendamentos)}
                    
                        <table className="table-agendamento" cellPadding={0} cellSpacing={0} border="1px solid">
                          <thead>
                            <tr>
                              <th>Data</th>
                              <th>Tatuador</th>
                              {/* <th>Status</th> */}
                              {/* {/* <th>Cancelar</th> */}
                              <th>Alterar</th>
                            </tr>
                          </thead>
                          <tbody>
                          {

agendamentos.filter((element)=> element.user_id == userId).map((post) => (
                              <tr>            
                                  {/* <th>{new Intl.DateTimeFormat("en-GB",{
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                  }).format(post.data)}</th> */}
                                  <th>{moment(post.data).format('DD/MM/YYYY')}</th>
                                  <th>Caio C</th>
                                  {/* <th>{post.status}</th> */}
                                  <th>{post.status === true ? <Button onClick={()=>removeItem(`/agendamento/${post.id}`)}>Cancelar</Button> : <Button onClick={()=>agendaItem(`agendamento/`)}>Agendar</Button>}</th>
                                  
                                  {/* <th><Button onClick={()=>removeItem(`/agendamento/${post.id}`)}>Cancelar</Button></th>
                                  <th><Button onClick={()=>agendaItem(`agendamento/`)}>Agendar</Button></th> */}
                                 
                              </tr>
                                                ))
                                              }
                          </tbody>
                        </table>


    </section>
  )
}

export default Datatable;
