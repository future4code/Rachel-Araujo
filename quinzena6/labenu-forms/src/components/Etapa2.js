import React from "react";

export default class Etapa2 extends React.Component {


    render(){
    return (
      <form>
          <h2>ETAPA 2: Informações do Ensino Superior </h2>
            <label for="curso"> 5. Qual curso?</label>
            <input type='text' name='curso'  />

            <label for="unidade"> 2. Qual a unidade de ensino?</label>
            <input type='number' name='unidade'  />
      </form>
    );
  }
}
