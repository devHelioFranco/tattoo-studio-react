import React from "react";
import logo from "../../assets/logo.png"

import "./Footer.css"




const Footer = ()=>{


    return(
        <div className="footer">
            <img src={logo}></img>
            <p>&copy; Todos os direitos reservados - Grupo 4 - Resilia</p>        
        </div>
    )
}
export default Footer;