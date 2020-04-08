import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
const pizzaURL = 'http://localhost:4000/pizzas';
const initialState = {
  id: -1,
  topping: '',
  size: '',
  vegetarian: false,
};
class App extends Component {
  state = initialState;

  postFetch = () => {
    let data = this.state;
    fetch(`${pizzaURL}/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accpets: 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => this.setState(initialState));
  };

  onEdit = (obj) => {
    let pizza = obj;
    delete pizza.data;
    this.setState(pizza);
  };
  onSubmit = (event) => {
    if (event.target.name === 'vegetarian') {
      this.setState({ [event.target.name]: !this.state.vegetarian });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state}
          postFetch={this.postFetch}
          onSubmit={this.onSubmit}
        />
        <PizzaList onEdit={this.onEdit} pizza={this.state} />
      </Fragment>
    );
  }
}

export default App;
