import React from "react";

// import NavBar from "./components/navBar/NavBar"
import NavBar from "../Nav2"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../../pages"
import Agendamento from "../../pages/Agendamento/agendamento"
import Contato from '../../pages/Contato/Contato.jsx';
import Tatuadores from '../../pages/Tatuadores/Tatuadores'
import Contato from '../../pages/Contato/Contato.jsx'
import  Cadastro from "../../pages/Cadastro/cadastro"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path='/contato' element={<Contato />} />

          <Route path="/contato" element={<Contato />} />

          <Route path="/agendamento" element={<Agendamento />} />
          <Route path='/tatuadores' element={ <Tatuadores /> } />
          <Route path='/Cadastro' element={ <Cadastro/> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
