import React, { useState, } from "react";
import "./cadastro.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import api from "../../api/api"

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
        api.post('/users', usuario).then(response =>{
            console.log(response)
        });
    }

    function onBlurCep(ev, setFieldValue){
        
        const {value} = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8 ){
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
                .then((data) => {
                     setFieldValue("localidade", data.cidade);
                    setFieldValue("logradouro", data.endereco);
                });
    }
    
    return (
        <>
        <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          cidade: '',
        }}
        
            {/* <div className="container"> */}
                       
            render={({ isValid, setFieldValue }) => (
          
            <form  onSubmit = {handleSubmit}>
            <h2>Cadastro de usuario</h2>
        
            <div className="row">
                <span>Nome</span>
                <input type="text" name="nome" onChange={handlechange}/>
            </div>
            
            <div className="row">
                <span>Idade</span>
                <input type="text" name="idade" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Email</span>
                <input type="text"  name="email" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Senha</span>
                <input type="password"  name="senha" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>CEP</span>
                <input type="text"  name="cep" onChange={handlechange} onBlur={(ev)=> onBlurCep(ev,setFieldValue)}/>
            </div>

            <div className="row">
                <span>Endereço</span>
                <input type="text"  name="endereco" onChange={handlechange}/>
            </div>
            <div className="row">
                <span>Cidade</span>
                <input type="text" name="cidade" onChange={handlechange}/>
            </div>
            
            <div className="row">
            <button disabled={!isValid}>CADASTRA-SE </button>
            </div>
            </form>
            )}
            
            // </div>
          </>
    )
    
}



export default Cadastro;