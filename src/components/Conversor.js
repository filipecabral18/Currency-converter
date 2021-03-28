import React, { Component } from 'react'
import './Conversor.css'
export default class Conversor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }
    this.convert = this.convert.bind(this);
  }
  convert() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=2c7565243cdb07bb0ab5`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        let cotacao = json[de_para];
        let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
        this.setState({ moedaB_valor })
      })
  }
  render() {
    return (
      <div class="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input id="input"
          type="text"
          onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }}
          placeholder="Digite um valor">
        </input>
        <input id="button"
          type="button"
          value="Converter"
          onClick={this.convert}>
        </input>
        <h2>Valor: {this.state.moedaB_valor}</h2>
      </div>
    )
  }
}