import React from "react";

// import NavBar from "./components/navBar/NavBar"
import NavBar from "../Nav2"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../../pages"
import Agendamento from "../../pages/Agendamento/agendamento"
import Tatuadores from '../../pages/Tatuadores/Tatuadores'
import Footer from "../Footer/Footer"

// import useToken from "../../useToken"

const Layout = () => {

  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path='/tatuadores' element={ <Tatuadores /> } />
          {/* <Route path='/login' element={ <Login /> } /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
