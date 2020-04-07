import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas: [],
    form: {
      id: "",
      topping: "",
      size: "",
      vegetarian: true
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizzas => this.setState({pizzas}))
  }

  handleChange = (event) => {
    this.setState({
      form: 
      {...this.state.form, [event.target.name]: event.target.value}
    }, console.log(this.state))
  }

  handleBooleanChange = () => {
    this.setState({
      form: {
        ...this.state.form, vegetarian: !this.state.form.vegetarian
      }
    })
  }

  handleClick = (pizzaObject) => {
    console.log(pizzaObject)
    this.setState({
      form: {
        id: pizzaObject.id,
        topping: pizzaObject.topping,
        size: pizzaObject.size,
        vegetarian: pizzaObject.vegetarian
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/pizzas/` + this.state.form.id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.form)
    })
    .then(response => response.json())
    .then(pizzaObject => this.afterSubmitState(pizzaObject))
  }

  afterSubmitState = (pizzaObject) => {
    let updatedPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === pizzaObject.id) {
        return pizzaObject
      } else {
        return pizza
      }
    })
    
    this.setState({
      pizzas: updatedPizzas,
      form: {
        id: "",
        topping: "",
        size: "",
        vegetarian: true
      }
    })
  }
  
  render() {
    return (
      <Fragment>
        <button onClick={() => console.log(this.state)}>show state</button>
        <Header/>
        <PizzaForm {...this.state.form} 
        handleChange={this.handleChange} 
        handleBooleanChange={this.handleBooleanChange}
        handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
