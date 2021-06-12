import React from 'react';
import styled from 'styled-components';
import HomeCadastro from './components/HomeCadastro';
import ListaPlaylist from './components/ListaPlaylist';

const Fundo = styled.body`
*{
  margin:0;
  padding:0;
  border:0;
  background:black;
}
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  color: #1fd660;
  font-size: 40px;
  font-weight: bold;
  background:black;
  height: 20vh;
  `



const Principal = styled.div `
    display: flex;
    justify-content: center;
    flex-direction:row;
    background:black;
    height:77vh;
    border: 1px solid #1fd660;
    

`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    
  }

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
      
     <Fundo>
  
        <Header>Labefy! O maior portal de músicas do Brasil!</Header>

        <Principal>{this.selecionaTela()}</Principal>


      </Fundo>


  );
  }
}




