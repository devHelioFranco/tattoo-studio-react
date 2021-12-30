import './App.css';
// import NavBar from "./components/navBar/NavBar"
import NavBar from "./components/Nav2"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages"
import Agendamento from "./pages/Agendamento/agendamento"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    // <div className="App">
    //  <NavBar/>

     <Router>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/agendamento"  element={<Agendamento/>}/>
       </Routes>
       <Footer/>
     </Router>
  //   </div>
  );
}

export default App;
