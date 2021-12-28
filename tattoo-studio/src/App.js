import React,{useState, useEffect} from 'react';
import Loader from './components/Loader/Loader.js';
import './App.css';


function App() {
  const  [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])
  return ( 
    loading ? <Loader/> : <h1>teste</h1>
  
    
  );
}

export default App;
