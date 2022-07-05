import * as React from 'react';
import Paises from './components/Paises';
import "./style.css";
import ListComponent from "./components/ListComponent";

export default function App() {
  const [nome, setNome] = React.useState("");
  const [pais, setPais] = React.useState("");

  //console.log("nome: " + nome)

  function clickNoBotao(event, novoNome) {
    //console.log("clickNoBotao event: " + event + " - novoNome: " + novoNome);
    setPais(<Paises name={novoNome}></Paises>)    
  };
  //console.log("components: " + components);
 
  return (
    <div class="container">
      <h1>Pesquisa Origem Nomes!!!</h1>
      <input
        type="text"
        placeholder="Informe o seu nome"
        name="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />

      <p></p>

      <button 
        onClick={event => clickNoBotao(event, nome)}>
        Confirma
      </button>

      {pais}
    </div>
  )
}