import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  initialState = {pizzas: [], editPizza: {}, topping:'',
                  size: '', vegetarian: false }
  state = {
    pizzas: [],
    editPizza: {},
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let newArray = this.state.pizzas.map(pizza => {
      if (pizza.id === this.state.editPizza.id){
        let newPizza = {...this.state.editPizza, topping: event.target.topping.value, 
          size: event.target.size.value,
          vegetarian: event.target.vegetarian.value}
        return newPizza
      }
      else {return pizza}
     })
    this.setState({ pizzas: newArray})
    
    this.state = this.initialState
  }
  componentDidMount(){
    fetch("http://localhost:3000/pizzas") 
    .then(res => res.json()) 
    .then(pizzas => this.setState({pizzas}))
  }
  handleEdit = (pizza) => {
    console.log(pizza)
    this.setState({editPizza: pizza })
  }
  
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} 
          handleFormChange={this.handleFormChange} 
          handleSubmit={this.handleSubmit}
          
        />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>

      
    );
  }
}

export default App;
