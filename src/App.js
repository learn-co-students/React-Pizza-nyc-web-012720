import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


  state= {
    pizzas: [],
    editPizza: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res=>res.json())
    .then(pizzas=> this.setState({pizzas}))
  }

  handleClick = (pizza) => {
    this.setState({
      editPizza: pizza
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
  
    this.setState({
      editPizza: {...this.state.editPizza, [event.target.name]: event.target.value
      }
    })
  }

  handleVegetarian = (event) => {
    console.log(this.state.editPizza.vegetarian)
    this.setState({
      editPizza: {...this.state.editPizza, vegetarian: !this.state.editPizza.vegetarian}
    })
  }

  handleSubmit = (id) => {
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        'accept' : 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        topping: this.state.editPizza.topping,
        vegetarian: this.state.editPizza.vegetarian,
        size: this.state.editPizza.size
      })
    })
    .then(res=> res.json())
    .then(pizza => {
      let newPizzas = this.state.pizzas.map(p => {
        if(p.id === pizza.id){
          return pizza
        } else { return p}
      })
      this.setState({ pizzas: newPizzas})
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} handleSubmit={this.handleSubmit} handleVegetarian={this.handleVegetarian} handleChange={this.handleChange}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
