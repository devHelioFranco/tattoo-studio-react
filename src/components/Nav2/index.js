import React from "react";
import logo from "../../assets/logo.png"
import banner from "../../assets/back.jpg"
import bannerCss from "./bannerCss.css"

import {Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink, Banner} from "./NavBar"

const NavBar = ()=>{


    return(
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/agendamento" activeStyle>Agendamento</NavLink>
                    <NavLink to="/contato" activeStyle>Contato</NavLink>
                    <NavLink to="/tatuadores" activeStyle>Tatuadores</NavLink>
                    <NavLink to="/cadastro" activeStyle>Cadastro</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
            <img src={banner} id="banner" /> 
            {/* <Banner/> */}
        
        </>
    )
}
export default NavBar;