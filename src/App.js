import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [], 
    toEdit: {}, 
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  toEdit = (pizza) => {
    this.setState({ toEdit: pizza})
  }

  editTopSize = (event) => {
    this.setState({
      toEdit: {
        ...this.state.toEdit,
        [event.target.name]: event.target.value, 
      }
    })
  }

  editVeg = (boolean) => {
    if (boolean === "true") {
      this.setState( { toEdit: {...this.state.toEdit, vegetarian: true} })
    } else if (boolean === "false") {
      this.setState( {toEdit: {...this.state.toEdit, vegetarian: false} })
    }
  }

  updatePizza = (event) => {
    fetch(`http://localhost:3000/pizzas/${this.state.toEdit.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.toEdit)
    })

    const newPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === this.state.toEdit.id) {
        return this.state.toEdit
      } else {
        return pizza
      }
    })
    this.setState({pizzas: newPizzas})
  }

  render() {
    console.log(this.state.toEdit)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          updatePizza={this.updatePizza} 
          editTopSize={this.editTopSize} 
          toEdit={this.state.toEdit} 
          editVeg={this.editVeg} 
        />
        <PizzaList toEdit={this.toEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
