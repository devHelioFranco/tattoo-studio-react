/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './App.css';
// import NavBar from "./components/navBar/NavBar"
// import NavBar from "./components/Nav2"
 import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Home from "./pages"
// import Agendamento from "./pages/Agendamento/agendamento"
// import Footer from "./components/Footer/Footer"
import Layout from "./components/Layout/Layout"
import Loader from "./components/Loader/Loader"


function App() {
    const [load, setLoad] = useState(true)
  const timer = setTimeout(()=> setLoad(false),2000)
  useEffect(()=>{
    return()=>{
      timer()
    }
  }, [])
  return (
    // <div className="App">
    //  <NavBar/>
    <div>
      
      {load ? <Loader/> : <Layout/>}
      
     
    </div>
  );
}

export default App;
