import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import HomeCadastro from './components/HomeCadastro';
import ListaPlaylist from './components/ListaPlaylist';


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    inputPlaylist: ""
  }

  // novaPlaylist = (event) => {
  //   this.setState({inputPlaylist: event.target.value})
  // }

  selecionaTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <HomeCadastro irParaLista={this.selecionaLista}/>
      case "lista":
        return <ListaPlaylist irParaHome={this.selecionaHome}/>  
      default:
        return <div>Página não encontrada!</div>
       
    }
  }

  selecionaHome = () =>{
    this.setState({telaAtual: "cadastro"})
  }

  selecionaLista =() =>{
    this.setState({telaAtual:"lista"})

  }

  render(){
    return (
      <div>
        <p>HEADER</p>

        <div>
          <p>CRIAR PLAYLIST</p>
          {this.selecionaTela()}
      
        </div>
      </div>
  
    
  


  );
  }
}




