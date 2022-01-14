
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./login.css";
import api from "../../api/api"




function Login({url}) {

    const navigate = useNavigate();
    
    const [usuario, setUsuario ] = useState({});

    function handlechange(e){
       
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    async function  handleSubmit(e){
        e.preventDefault();

       const userData = await api.get(`/users/${usuario.Email}`)

        
        // localStorage.setItem('email', usuario.Email)
        console.log(userData.data)
        if(userData.data == null){
            alert("Erro, email ou senha nao encontrado")
            return 
        }
        if(userData.data.senha == usuario.Senha){
            localStorage.setItem('email', userData.data.email)
            localStorage.setItem('nome', userData.data.nome)
            localStorage.setItem('id', userData.data.id)
            navigate("/agendamento")


        }
        else{
            alert("Erro, email ou senha nao encontrado")
        }
    }

    

    return (
    <div className="container">
        <form  onSubmit = {handleSubmit}>
        
        <h2>Login</h2>
        
            <div className="row">
                <span>Email</span>
                <input type="text"  name="Email" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Senha</span>
                <input type="password"  name="Senha" onChange={handlechange}/>
            </div>

            <div className="row">
            <button>Logarrrr</button>
            </div>
        </form>
        
        </div>
    )

import React from 'react';


export default function Login({ setToken }) {
  return(
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )

}

