import * as React from 'react';
import Paises from './components/Paises';
import "./style.css";

export default function App() {
  const [nome, setNome] = React.useState("")
  const [pais, setPais] = React.useState("")
  //console.log("nome: " + nome)

  function limpaPagina() {
    window.location.reload()
  }

  function clickNoBotao(event, novoNome) {
    //console.log("clickNoBotao novoNome: " + novoNome)
    setPais(<Paises
              name={novoNome}>
            </Paises>)  
  };

  return (
    <div class="container">
      <h1>Pesquisa Origem Nomes!!</h1>
      <input
        type="text"
        placeholder="Informe o seu nome"
        name="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <p></p>
      <button class="btn"
        onClick={e => clickNoBotao(e, nome)}>
        Confirma
      </button>
      <button class="btn2"
        onClick={e => limpaPagina(e)}>
        Limpar
      </button>
      {pais}
    </div>
  )
}
