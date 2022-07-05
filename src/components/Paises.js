import * as React from "react";
import paisesJson from "./listaDePaises.json";

class Pais {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

export default function Paises(props) {
  const [paises, setPaises] = React.useState([])

  console.log("Paises props.name: " + props.name);
  //console.log("paisesJson: " + paisesJson)

  let paisesObjetos = paisesJson.map((it) => {
    //console.log("name: " + it.name + " - code: " + it.code + " - class: " + it.name.constructor.name)
    return new Pais(it.name, it.code);
  });
  //console.log("paisesObjetos: " + paisesObjetos)

  React.useEffect(() => {
    //console.log('useEffect props.name: ' + props.name)
    fetch("https://api.nationalize.io/?name=" + props.name)
      .then((response) => response.json())
      .then((data) => {
        let countries = []
        let codigoPaises = []
        try {
          //console.log("data: " + data)
          //console.log("data.country: " + data.country)
          countries = data.country
          //console.log("countries: " + countries)
          codigoPaises = countries.map((c) => {
            //console.log("c: " + c.country_id)
            return c.country_id
          });
          //console.log("codigoPaises: " + codigoPaises)
        } catch (error) {
          console.log('try catch error: ' + error)
        }
        setPaises(codigoPaises)
      })  
  }, [])
  //console.log('paises:' + paises)

  let paisesDoNome = [];
  paises.map((pais) => {
    //console.log("pais: " + pais)
    paisesObjetos.filter((it) => {
      //console.log("pais: " + pais + " code: " + it.code + " - name: " + it.name)
      if (it.code === pais) {
        //console.log("2 pais: " + pais + " code: " + it.code + " - name: " + it.name)
        paisesDoNome.push(it.name);
        return true;
      }
      return false;
    });
  });
  //console.log('paisesDoNome:' + paisesDoNome)

  return (
    <div>
      <h2>Paises</h2>
      <div>
        {paisesDoNome.map((pais) => (
          <div>
            <span>{pais}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
