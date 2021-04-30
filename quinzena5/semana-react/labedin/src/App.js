import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './img/eu.jpg';
import alterdata from './img/alterdata.svg';
import ios from './img/ios.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {eu}
          nome="Rachel Araujo" 
          descricao="Oi, Meu nome é Rachel, sou estudante de Front End da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {alterdata}
          nome="Alterdata" 
          descricao="Analista de Suporte, Consultora em vendas de Softwares" 
        />
        
        <CardGrande 
          imagem= {ios}
          nome="Instituto da Oportunidade Social (IOS)" 
          descricao="Instrutora de Tecnologia" 
        />

        
           
        <CardPequeno
          email= 'Email: rachelaraujo17@gmail.com'
          endereco='Endereço: Rua X, São Paulo-SP'
          />
         

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
