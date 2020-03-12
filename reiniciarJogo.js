import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = ({ 
	      value: null,
	      quadrados: Array(9).fill(null),
	      xIsNext: true,
	    });
	}

	restartGame() {
		this.setState({
	      value: null,
	      quadrados: null,
	      xIsNext: true,
	    })
	}

	render() {
		return (
			<View>
	       		<Button title="Reiniciar" onPress={() => this.restartGame()}> Reiniciar o jogo</Button>
	       	</View>
		);
	}
};