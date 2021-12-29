import React,{useState, useEffect} from 'react';
import Loader from './components/Loader/Loader.js';
import Header from './components/Header/Header.js'
import './App.css';


function App() {
  const  [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])
  return ( 
    loading ? <Loader/> : <Header/>
  
    
  );
}

export default App;
