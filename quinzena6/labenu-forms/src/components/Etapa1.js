import React from "react";


export default class Etapa1 extends React.Component {


    render(){
    return (
      <form>
          <h2>ETAPA 1: Dados Gerais </h2>
            <label for="nome"> 1. Qual o seu nome?</label>
            <input type='text' name='nome'  />

            <label for="idade"> 2. Qual sua idade?</label>
            <input type='number' name='idade'  />

            <label for="email"> 3. Qual seu email?</label>
            <input type= 'email' name='email'  />

            <label for="escolaridade"> 4. Qual a sua escolaridade?</label>
            
            <select name="escolaridade">
                <option value="Emi">Ensino Médio Incompleto</option>
                <option value="Emc">Ensino Médio Completo</option>
                <option value="Esi">Ensino Superior Incompleto</option>
                <option value="Esc">Ensino Superior Completo</option>
            </select>


            </form>
    );
  }
}




  

