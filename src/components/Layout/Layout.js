import React from "react";

// import NavBar from "./components/navBar/NavBar"
import NavBar from "../Nav2"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../../pages"
import Agendamento from "../../pages/Agendamento/agendamento"
// import Contato from '../../pages/Contato/Contato.jsx';
import Tatuadores from '../../pages/Tatuadores/Tatuadores'
import  Cadastro from "../../pages/Cadastro/cadastro"
import Login from "../../pages/Login/login"
import Footer from "../Footer/Footer"
import Contato from "../../pages/Contato/Contato"

const Layout = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path='/tatuadores' element={ <Tatuadores /> } />
          <Route path='/Cadastro' element={ <Cadastro/> } />
          <Route path='/Login' element={ <Login /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;