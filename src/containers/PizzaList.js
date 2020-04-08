import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizza = () => {
    return this.props.pizzas.map(pizza => <Pizza key={pizza.id} {...pizza} handleEdit={()=>this.props.handleEdit(pizza.id)}/>)
  }


  render() {
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
          {this.renderPizza()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
