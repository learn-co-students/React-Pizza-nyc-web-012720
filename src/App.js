import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const api = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount() {
    fetch(api)
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  handleEditBtn = event => {
    const pizzas = this.state.pizzas
    const pizzaId = parseInt((event.target.value), 0)
    const editPizza = pizzas.find( pizza => pizza.id === pizzaId)
    this.setState({editPizza})
  }

  handleChange = event => {
    const key = event.target.name
    const value = event.target.value

    if (key === "vegetarian") {
      this.setState({ 
        editPizza: {...this.state.editPizza, 
          vegetarian: !this.state.editPizza.vegetarian
        }
      })
    } else {
      this.setState({
        editPizza: {...this.state.editPizza, [key]: value}
      })
    }
  }

  handleSubmit = () => {
    if (this.state.editPizza.id){
      this.updatePizza()
    } else {
      this.newPizza()
    }
  }

  updatePizza = () => {
    const pizzaId = this.state.editPizza.id
    fetch(`${api}/${pizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.editPizza)
    })
    .then(res => res.json())
    .then(updatedPizza => this.updateList(updatedPizza))
  }

  updateList = updatedPizza => {
    const list = this.state.pizzas
    const updated = list.map( pizza => {
      return pizza.id === updatedPizza.id ? updatedPizza : pizza
    })
    this.setState({pizzas: updated})
  }


  newPizza = () => {
    console.log("newPizza: ", this.state.editPizza)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          editPizza={this.state.editPizza} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} handleEditBtn={this.handleEditBtn}/>
      </Fragment>
    );
  }
}

export default App;
