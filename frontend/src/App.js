import "./App.css";
import React, { useState } from "react";
import WbeSocket from "ws";

function App() {
  const ws = new WebSocket("ws:localhost:8000");
  
  if (!ws){
    console.log("ERROOOOOOOO 🚫")
  }

  async function vote(voteOption) {
    ws.on('open', function open() {
    ws.send({ option: voteOption });
    });
  }

  return (
    <body className="body">
      <h1 className="tituloH1">Enquete</h1>
      <main className="main">
        <h2 className="tituloH2">Opção 1</h2>
        {/* <div className='progresso1'>{`${opcao1}`}</div> */}
        <div className="firstOption">
          <p className="txt">y votos</p>
        </div>
        <button className="voteBtn" onClick={vote(1)}>
          <p className="txt">Votar</p>
        </button>
        <h2 className="tituloH2">Opção 2</h2>
        {/* <div className='progresso2'>{`${opcao2}`}</div> */}
        <div className="secondOption">
          <p className="txt">x votos</p>
        </div>
        <button className="voteBtn" onClick={vote(2)}>
          <p className="txt">Votar</p>
        </button>
      </main>
    </body>
  );
}

export default App;
