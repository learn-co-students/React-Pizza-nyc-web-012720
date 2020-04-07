import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <div>
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
        {this.props.pizzas
        .map((pizza, index) => <Pizza key={index} pizza={pizza} 
                                handleEdit={this.props.handleEdit}/>)}
        </tbody>
      </table>

      </div>
      
    );
  }

}

export default PizzaList;
