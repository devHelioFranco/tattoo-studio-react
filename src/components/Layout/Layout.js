import React from "react";

// import NavBar from "./components/navBar/NavBar"
import NavBar from "../Nav2"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../../pages"
import Agendamento from "../../pages/Agendamento/agendamento"
import Tatuadores from '../../pages/Tatuadores/Tatuadores'
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path='/tatuadores' element={ <Tatuadores /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
