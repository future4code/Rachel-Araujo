import React from "react";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import styled from 'styled-components' 


const Pagina1 = styled.div`
display:flex;
justify-content:space-between;
`

export default class App extends React.Component {

  state = {
    etapa:1
  };

  renderizaEtapa= () =>{
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:  
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
          break;     
    };
  };

  irParaProximaEtapa= () =>{
    this.setState({etapa: this.state.etapa + 1});
    if (this.state.etapa === 4) {
     return this.setState({etapa: this.state.etapa - 3});

      
  }
}

  render(){
  return (
    <div>
      {this.renderizaEtapa()}
     <button onClick={this.irParaProximaEtapa}>Próxima etapa</button> 
    </div>
  );
};
}

