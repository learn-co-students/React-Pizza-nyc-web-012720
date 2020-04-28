import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editing: []
  }

   componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
    .then(resp => resp.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  newFetch = () => {
    fetch(`http://localhost:3000/pizzas`)
    .then(resp => resp.json())
    .then(pizzas => this.setState({ pizzas }))
  }


  handleClick = (id) => {
    const pizza = this.state.pizzas.filter( pizza => pizza.id === id)[0]
    this.setState({
      editing: pizza
    })
  }

  handleChange = (event) => {
    this.setState({
      editing: {...this.state.editing, 
        [event.target.name]: event.target.value
      }
      
    })
  }

  handleSubmit = (id) => {
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.editing)
    })
    .then(res => res.json())
    .then(data => {
      let newPizzaArray= this.state.pizzas.map( pizza => {
        if(pizza.id === data.id){
          return data
        } else { return pizza }
      })
      this.setState({ pizzas: newPizzaArray, editing: []})
    })
  }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.editing !== this.state.editing) {
  //       this.newFetch();
  //     }
  // }

  render() {
    console.log(this.state.editing)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editing} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
