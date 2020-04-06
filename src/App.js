import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {
      id: null,
      size: "",
      topping: "",
      vegetarian: false
    }
  }

componentDidMount(){
  fetch('http://localhost:3000/pizzas')
  .then(resp => resp.json())
  .then(pizzas => this.setState({ pizzas }))
}

setCurrentPizza = (pizzaObject) => {
  this.setState({currentPizza: pizzaObject})
}

handleNameChange = event => {
  this.setState({
    currentPizza: {...this.state.currentPizza,
      topping: event.target.value}
  })
}

handleSizeChange = event => {
  this.setState({
    currentPizza: {...this.state.currentPizza,
      size: event.target.value}
  })
}

handleVegChange = event => {
  if (event.target.value === "Vegetarian") {
  this.setState({
    currentPizza: {...this.state.currentPizza,
      vegetarian: true}
  })
}
else {
  this.setState({
    currentPizza: {...this.state.currentPizza,
      vegetarian: false}
  })
}
}

  updatePizza = () => {
    const configObject = {
      method: 'PATCH',
      headers: {accept: 'application/json',
                'content-type': 'application/json'
    },
    body: JSON.stringify({
      id: this.state.currentPizza.id,
      topping: this.state.currentPizza.topping,
      vegetarian: this.state.currentPizza.vegetarian,
      size: this.state.currentPizza.size
    })
    }
    fetch('http://localhost:3000/pizzas', configObject)
    .then(resp => resp.json())
    .then(result => console.log(result))
  }

  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} handleNameChange={this.handleNameChange} handleSizeChange={this.handleSizeChange} handleVegChange={this.handleVegChange} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} setCurrentPizza={this.setCurrentPizza} />
      </Fragment>
    );
  }
}

export default App;
