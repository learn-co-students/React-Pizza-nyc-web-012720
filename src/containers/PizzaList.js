import React, { Component } from 'react';
import Pizza from '../components/Pizza';
const pizzaURL = 'http://localhost:4000/pizzas';
class PizzaList extends Component {
  state = {
    pizzas: [],
  };
  componentDidMount() {
    fetch(pizzaURL)
      .then((response) => response.json())
      .then((pizzas) => this.setState({ pizzas }));
  }
  componentDidUpdate(prevProps, prevState, snapsnot) {
    let newPizzas = this.state.pizzas;
    let index = newPizzas.findIndex((pizza) => pizza.id === prevProps.pizza.id);
    if (prevProps.pizza.id !== this.props.pizza.id) {
      newPizzas.splice(index, 1, prevProps.pizza);
      this.setState({ pizzas: newPizzas });
    }
  }
  renderPizzas = () => {
    return this.state.pizzas.map((pizza) => {
      return (
        <Pizza
          key={pizza.id}
          pizza={pizza}
          handleClick={this.handleClick}
          onEdit={this.props.onEdit}
        />
      );
    });
  };
  handleClick = () => {
    return;
  };
  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Topping</th>
            <th scope='col'>Size</th>
            <th scope='col'>Vegetarian?</th>
            <th scope='col'>Edit</th>
          </tr>
        </thead>
        <tbody>{this.renderPizzas()}</tbody>
      </table>
    );
  }
}

export default PizzaList;
