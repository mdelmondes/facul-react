import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

export default class App extends Component {
   constructor(props) {
		super(props);
		this.state = ({
            num1: null, 
            num2: null, 
            resultado: '',
            respostaUsuario: ''
        });

		this.calcular = this.calcular.bind(this);
	}
  
    calcular() {
	  let resultado = 0;
      if(this.state.num1 != null && this.state.num2 != null){
		resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
      }
    }  
  
  renderResultado(){
    if(this.state.resultado == this.state.respostaUsuario){
      <View>
        <Text style={{color: green}}>
            Parabens, você acertou! A resposta é: {this.state.resultado}
        </Text>
      </View>
    } else {
      <View>
        <Text style={{color: red}}>
            Você errou! A resposta é: {this.state.resultado}
        </Text>
      </View>
    }
  }
  
  render() {
    return (
      <View>
      <TextInput style={{padding: 8, marginLeft: 10, marginRight: 20, width: '65%', backgroundColor: '#fff', borderRadius: 15,
              borderColor: 'rgba(225, 225, 225 , 1)', borderWidth: 1}}
              placeholder={'Digite o primeiro número'}
              value={this.state.num1}
              onChangeText={(num1) => this.setState({ num1 })}
      />

      <TextInput style={{padding: 8, marginLeft: 10, marginRight: 20, width: '65%', backgroundColor: '#fff', borderRadius: 15,
              borderColor: 'rgba(225, 225, 225 , 1)', borderWidth: 1}}
              placeholder={'Digite o segundo número'}
              value={this.state.num2}
              onChangeText={(num2) => this.setState({ num2 })}
      />
      <Button onPress={() => this.calcular()}>Somar os dois numeros</Button>

      <TextInput placeholder={'Digite a resposta da soma'}
              value={this.state.respostaUsuario}
              onChangeText={(respostaUsuario) => this.setState({ respostaUsuario })}
      />      
        <View>
            {this.renderResultado()}
         </View>
      </View>    
    )
  }		
}
