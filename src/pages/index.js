import React from "react";
import mapa from "../assets/mapa.png"
import tattoo from "../assets/tattoo.jpg"
import ReactTypingEffect from 'react-typing-effect';
import estilo from './index.css'


const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["HECH","Arte", "Estilo", "Segurança", "Feito pra você!"]} speed={100} eraseDelay={50} typingDelay={50} eraseSpeed={100}
      />

      </>)
};

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px"
      }}
    > 
      <h1><ReactTypingEffectDemo/></h1>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: '70%'
      }}>
        <img src={tattoo} id="tattoo"/>
        <div style={{
          width: "50%"
        }}>
          <h2 id="titulo">A <strong>HECH</strong> é um estúdio de tatuagem, feito pra <strong>você</strong>!
            Possuimos a mais moderna infraestrutura para seu conforto, e profissionais
            altamente capacitados e apaixonados no que fazem, venha eternizar sua arte corporal conosco.
            </h2>
        </div>
          
        
        
          
        
        
      </div>
      
      

     
      <h1>Onde estamos</h1>
      <div
        style={{
          display: "grid",
          gridGap: "100px",
          gridTemplateColumns: "auto auto",
          padding: '20px',
          alignItems: "center"
        }}
      >
        <div className="gridItem">
          <h1>Endereço:</h1>
          <h2>
            Av. Paulista, 1347 - São Paulo<br/> 
            Telefones: (11)99987-0000 (11)
            3265-2034
          </h2>
        </div>
        <div className="gridItem">
          <img src={mapa}></img>
        </div>
      </div>
    </main>
  );
};
export default Home;
