import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  pizzaRender = () => {
    const pizzas = this.props.pizzas
    return pizzas.map( pizza => {
      return <Pizza key={pizza.id} pizza={pizza} handleEditBtn={this.props.handleEditBtn}/>
    })
  }

  render() {
    // console.log(this.props.pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.pizzaRender()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
