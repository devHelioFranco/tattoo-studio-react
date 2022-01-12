import React, { useState, } from "react";
import "./login.css";


function Login() {
    
    const [usuario, setUsuario ] = useState({});

    function handlechange(e){
       
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('email', usuario.Email)
        console.log(usuario)
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
}

export default Login;