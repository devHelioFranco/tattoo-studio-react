import React from "react";
import "./cadastro.css"
import Footer from "../../components/Footer/Footer"


const cadastro = () => {
    return (
    <div className="container">
        <form>
        <h2>Cadastro de usuario</h2>
            <div className="row">
                <span>Nome</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>Idade</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>Email</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>Senha</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>Endereco</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>Cidade</span>
                <input type="text"/>
            </div>
            <div className="row">
                <span>CEP</span>
                <input type="text"/>
            </div>

            <div className="row">
            <button>CADASTRA-SE </button>
            </div>
        </form>
        <Footer/>
        </div>
    )
}



export default cadastro;