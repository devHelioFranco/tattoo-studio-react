import React from "react";
import logo from "../../assets/logo.png"
import {Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink} from "./NavBar"

const NavBar = ()=>{


    return(
        <>
            <Nav>
                <NavLink to="/home">
                    <img src={logo}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/agendamento" activeStyle>Agendamento</NavLink>
                    <NavLink to="/contato" activeStyle>Contato</NavLink>
                    <NavLink to="/tatuadores" activeStyle>Tatuadores</NavLink>
                    <NavLink to="/contato" activeStyle>Contato</NavLink>
                    <NavLink to="/cadastro" activeStyle>Cadastro</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        
        </>
    )
}
export default NavBar;