import React, { Component } from 'react';
import './App.css';
import biscoito from './assets/biscoito.png';

class App extends Component {

    constructor(props){
      super(props);

      this.state = {
          texto: 'Clique no botão acima para receber sua frase da sorte!'
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this);

      this.frases = ['A vida trará coisas boas se tiver paciência.', 
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'A juventude não é uma época da vida, é um estado de espírito.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 'Siga os bons e aprenda com eles.', 'Uma bela flor é incompleta sem as suas folhas.', 'O riso é a menor distância entre duas pessoas.', 'Quem olha para fora sonha; quem olha para dentro acorda.', 'O amor está sempre mais próximo do que você imagina.', 'Se você se sente só é porque construiu muros ao invés de pontes.', 'O conhecimento é a única virtude e a ignorância é o único vício.', 'A maior barreira para o sucesso é o medo do fracasso.', 'Você sempre será a sua melhor companhia!', 'Realize o óbvio, pense no improvável e conquiste o impossível.'];
    }

    quebraBiscoito(){
        let state = this.state;

        //Math.floor = recebe numero inteiro
        //Math.random = para pegar numero aleatorio
        //this.frases.lenght = pegando o nosso array 'frases'

        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

        state.texto = '"' + this.frases[numeroAleatorio] + '"';

        this.setState(state);

    }


  render(){
    return (
      <div className="container">
          
          <img src={biscoito} alt="imagem do biscoito da sorte" className="img"/>

          <Botao nome="Abrir Biscoito!" acaoBtn={this.quebraBiscoito} />

          <h3 className="textoFrase">{this.state.texto}</h3>

      </div>
    );
  }
  
}


class Botao extends Component{

    render(){

       return(

          <div>
              <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
          </div>

       ) 

    }

}


export default App;
