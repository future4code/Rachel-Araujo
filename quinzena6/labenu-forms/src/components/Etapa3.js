import React from "react";

export default class Etapa3 extends React.Component {


    render(){
    return (
      <form>
          <h2>ETAPA 3: Informações Gerais de Ensino </h2>
            <label for="graduacao"> 5. Por que você não terminou um curso de graduação?</label>
            <input type='text' name='graduacao'  />

            <label for="complementar"> 6. Você fez algum curso complementar?</label>
            <select name="complementar">
                <option value="ct">Curso técnico</option>
                <option value="ci">Curso de inglês</option>
                <option value="ncc">Não fiz curso complementar</option>
            </select>


      </form>
    );
  }
}