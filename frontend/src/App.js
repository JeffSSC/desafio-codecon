import './App.css';

function App() {
  return (
    <>
      <h1>Enquete</h1>
      <main className=''>
      <h2>Opção </h2>
        {/* <div className='progresso1'>{`${opcao1}`}</div> */}
        <div className='progresso1'>y%</div>
        <button className='votar1'>Votar</button>
      <h2>Opção 2</h2>
        {/* <div className='progresso2'>{`${opcao2}`}</div> */}
        <div className='progresso2'>x%</div>
        <button className='votar2'>Votar</button>
      </main>
    </>
  );
}

export default App;
