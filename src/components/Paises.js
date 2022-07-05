import * as React from 'react';
import paisesJson from './listaDePaises.json';

class Pais {
  constructor(name, code) {
    this.name = name
    this.code = code
  }
}

export default function Paises(props) {
  const [paises, SetPaises] = React.useState([])

  console.log("props.name: " + props.name)
  //console.log("paisesJson: " + paisesJson)

  let paisesObjetos = paisesJson.map((it) => {
    //console.log("name: " + it.name + " - code: " + it.code + " - class: " + it.name.constructor.name) 
    return new Pais(it.name, it.code)
  })
  //console.log("paisesObjetos: " + paisesObjetos)

  const testNome = "gabriel"
  React.useEffect(() => {
    //fetch('https://api.nationalize.io/?name=' + props.name)
    fetch('https://api.nationalize.io/?name=' + testNome)
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
          })
        } catch {
        }

        SetPaises(codigoPaises)
      });
  }, []);
  //console.log('paises:' + paises)

  let paisesDoNome = []
  paises.map((pais) => {
    //console.log("pais: " + pais)
    paisesObjetos.filter((it) => {
      //console.log("pais: " + pais + " code: " + it.code + " - name: " + it.name)
      if (it.code === pais) { 
        //console.log("2 pais: " + pais + " code: " + it.code + " - name: " + it.name)
        paisesDoNome.push(it.name)
        return true
      }
      return false
    })
  })
  //console.log('paisesDoNome:' + paisesDoNome)

  return (
    <div>
      <h2>Paises</h2>
      <div>
        {paisesDoNome.map((pais) =>
          <div>
            <span>{pais}</span>
          </div>
        )}
      </div>
    </div>
  )
}