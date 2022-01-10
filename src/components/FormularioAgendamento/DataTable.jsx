import React, { useState, useEffect } from "react";
import {Button} from "../Button/Button"
import "./DataTable.css"
import {busca} from '../../services/api'
const cors = require('cors')

const Datatable = ({url}) =>{

  const [agendamentos, setAgendamentos] = useState([])

  useEffect(()=>{
    busca(url, setAgendamentos)


},[])

    return (
    //   usar um GET para puxar os agendamentos 
    

    <section className="agendamento">
                    {
                      agendamentos.map((post) => (
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
                                  <th>21/01/22{post.data}</th>
                                  <th>Caio C</th>
                                  <th>Agendado</th>
                                  <th><Button>Cancelar</Button></th>
                              </tr>
                          </tbody>
                        </table>
                  ))
                  }
    </section>
  )
}

export default Datatable;
