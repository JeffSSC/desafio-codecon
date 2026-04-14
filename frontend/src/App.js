import "./App.css";
import React, { useEffect, useState } from "react";
import WbeSocket from "ws";

function App() {
  // const ws = new WebSocket("ws:localhost:8000");

  // console.log(ws)

  // if (!ws) {
  //   console.log("ERROOOOOOOO 🚫")
  // }

  // async function vote(voteOption) {
  //   let optionObject = {
  //     option: voteOption
  //   }
  //   ws.on('open', function open() {
  //     ws.send({ option: optionObject });
  //   });
  // }
  let aVotes, bVotes;
  useEffect(()=>{
    
  }, [])
  function handleVoteA(){
    let voteA = localStorage.getItem(aVotes)
    setVoteA(voteA+1)
    localStorage.setItem(aVotes, voteA)
  }

  function handleVoteB(){
    setVoteB(voteB+1)
  }

  let [voteA, setVoteA] = useState(0);
  let [voteB, setVoteB] = useState(0);

  return (
    <body className="body">
      <h1 className="tituloH1">Enquete 📚</h1>
      <main className="main">
        <h2 className="tituloH2">Opção A 📍</h2>
        <div className="firstOption">
          <p className="txt">{`${voteA}`} votos 🎉</p>
        </div>
        <button className="voteBtn" onClick={handleVoteA}>
          <p className="txt">Votar 🖱️</p>
        </button>
        <h2 className="tituloH2">Opção B 📍</h2>
        <div className="secondOption">
          <p className="txt">{`${voteB}`} votos 🎉</p>
        </div>
        <button className="voteBtn" onClick={handleVoteB}>
          <p className="txt">Votar 🖱️</p>
        </button>
      </main>
    </body>
  );
}

export default App;
