import * as React from 'react';
import Paises from './components/Paises';
import "./style.css";
import ListComponent from "./components/ListComponent";

export default function App() {
  const [nome, setNome] = React.useState([])
  const [components, setComponets] = React.useState([])

  //console.log("nome: " + nome)

  const clickNoBotao = () => {
    console.log("click no botao nome")
    //setNome(nome)
    //<Paises name={nome}></Paises>
    // setComponets([Paises])
  }
  console.log('components: ' + components)
 
  return (
    <div class="container">
      <h1>Pesquisa Origem Nomes!!!</h1>
      <input 
        type="text" placeholder="Informe o seu nome" name="nome"
        value={nome} onChange = {(e) => setNome(e.target.value)} 
      />
      <p></p>
      <button class="btn" onClick={clickNoBotao}>Confirma</button>
      <Paises name={nome}></Paises>

      {/* {components.map((item, i) => ( <ListComponent text={item} /> ))} */}

    </div>
  )
}