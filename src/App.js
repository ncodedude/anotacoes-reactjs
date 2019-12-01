import React from 'react';
import './App.css';


class Anotacao extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  render() {
  return (
    <div>
      <div><h5>02/12/2019 - 08:45:00h</h5> <span></span> </div>
      <div>Yasmin Amanda da Luz -  Médico Clínico Geral</div>
      <div>{this.props.item.anotacao}</div>
    </div>
    );
  }

}

class AnotacoesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      anotacao: '',
      caracteresRestantes: 0
    };
  }

  render() {

  let _data = this.state.lista;
  return (
    <div>
        <div>Anotações</div>
        <h5>Fazer anotação:</h5>
        <textarea value={this.state.anotacao} onChange={e => this.atualizarValorCaixaDeTexto(e)} className="caixa-anotacao" cols="30" maxLength="350" rows="10" />
        <div>
          <span>{this.state.caracteresRestantes} de 350 caracter(es) </span>
          <input type="checkbox" /> Anotação Visível
          <button onClick={e => this.salvar(e)} >Salvar</button>
        </div>
        {_data.map((item, i) =>(
          <Anotacao key={i} item={item} />
        ))}
    </div>
    );
  }

  atualizarValorCaixaDeTexto(e) {
    let restam = parseInt(e.target.value.length);
    this.setState({
      caracteresRestantes: restam,
      anotacao: e.target.value
    });
  }

  salvar(e){
    let novaLista = this.state.lista;
    novaLista.push({ key: new Date().toISOString(),  anotacao: this.state.anotacao, profissional: 'Cara Logado'});
    this.setState({
      lista: novaLista,
      anotacao: '',
      caracteresRestantes: 0
    });

    console.log(this.state.lista);
  }
}



function App() {
  return (
    <div className="App">
      <AnotacoesComponent/>
    </div>
  );
}

export default App;

