import "./App.css";
import React, { useState } from "react";
import WbeSocket from "ws";

function App() {
  const ws = new WebSocket("ws:localhost:8000");

  console.log(ws)

  if (!ws) {
    console.log("ERROOOOOOOO 🚫")
  }

  async function vote(voteOption) {
    let optionObject = {
      option: voteOption
    }
    ws.on('open', function open() {
      ws.send({ option: optionObject });
    });
  }

  return (
    <body className="body">
      <h1 className="tituloH1">Enquete</h1>
      <main className="main">
        <h2 className="tituloH2">Opção A</h2>
        {/* <div className='progresso1'>{`${opcao1}`}</div> */}
        <div className="firstOption">
          <p className="txt">y votos</p>
        </div>
        <button className="voteBtn" onClick={vote("opcao a")}>
          <p className="txt">Votar</p>
        </button>
        <h2 className="tituloH2">Opção B</h2>
        {/* <div className='progresso2'>{`${opcao2}`}</div> */}
        <div className="secondOption">
          <p className="txt">x votos</p>
        </div>
        <button className="voteBtn" onClick={vote("opcao b")}>
          <p className="txt">Votar</p>
        </button>
      </main>
    </body>
  );
}

export default App;
