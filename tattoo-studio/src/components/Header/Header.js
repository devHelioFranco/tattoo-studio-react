import React from 'react';
import {DivHeader, NavLinks, Nav, Login} from './Style'
import Logo from '../../assets/hech.png'

function Header(){
    return(
        
            <DivHeader>
               
                <img src={Logo}/>
                <Nav>
                    
                    <NavLinks>Home</NavLinks>
                    <NavLinks>Agendamento</NavLinks>
                    <NavLinks>Tatuadores</NavLinks>
                    <NavLinks>Contato</NavLinks>
                    
                </Nav>
                
                <Login>
                    <NavLinks>Login</NavLinks>
                </Login>
            </DivHeader> 
        
    )
}

export default Header