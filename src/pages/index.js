import React from "react";
import mapa from "../assets/mapa.png"
import ReactTypingEffect from 'react-typing-effect';


const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Hello.", "World!"]} speed={100} eraseDelay={50} typingDelay={50} eraseSpeed={100}
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
     
      <h1>Onde estamos</h1>
      <div
        style={{
          display: "grid",
          gridGap: "100px",
          gridTemplateColumns: "auto auto",
          padding: '20px'
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
