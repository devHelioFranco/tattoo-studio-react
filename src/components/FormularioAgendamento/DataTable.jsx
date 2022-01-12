import React, { useState, useEffect } from "react";
import {Button} from "../Button/Button"
import "./DataTable.css"
import {busca, removeItem, agendaItem} from '../../services/api'
import axios from "axios";
import moment from "moment";


const Datatable = ({url}) =>{

  const [agendamentos, setAgendamentos] = useState([])

  useEffect(()=>{
    busca(url, setAgendamentos)
    removeItem(url)
    // agendaItem(url)


},[])

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
                              <th>Cancelar</th>
                              <th>Agendar</th>
                            </tr>
                          </thead>
                          <tbody>
                          {

agendamentos.map((post) => (
                              <tr>            
                                  {/* <th>{new Intl.DateTimeFormat("en-GB",{
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                  }).format(post.data)}</th> */}
                                  <th>{moment(post.data).format('DD/MM/YYYY')}</th>
                                  <th>Caio C</th>
                                  {/* <th>{post.status}</th> */}
                                  <th><Button onClick={()=>removeItem(`/agendamento/${post.id}`)}>Cancelar</Button></th>
                                  <th><Button>Agendar</Button></th>
                              </tr>
                                                ))
                                              }
                          </tbody>
                        </table>

    </section>
  )
}

export default Datatable;
