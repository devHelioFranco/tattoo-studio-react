import React, { useState, } from "react";
import "./cadastro.css";


function Cadastro() {
    
    const [usuario, setUsuario ] = useState({});

    function handlechange(e){
        
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(usuario)
    }

    return (
    <div className="container">
        <form  onSubmit = {handleSubmit}>
        
        <h2>Cadastro de usuario</h2>
        
            <div className="row">
                <span>Nome</span>
                <input type="text" name="Nome" onChange={handlechange}/>
            </div>
            
            <div className="row">
                <span>Idade</span>
                <input type="text" name="Idade" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Email</span>
                <input type="text"  name="Email" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Senha</span>
                <input type="password"  name="Senha" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Endereço</span>
                <input type="text"  name="Endereço" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Cidade</span>
                <input type="text" name="Cidade" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>CEP</span>
                <input type="text"  name="CEP" onChange={handlechange}/>
            </div>

            <div className="row">
            <button>CADASTRA-SE </button>
            </div>
        </form>
        
        </div>
    )
}



export default Cadastro;