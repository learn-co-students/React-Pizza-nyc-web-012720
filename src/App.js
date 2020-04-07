import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      targetPizza: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ pizzas: data });
      });
  }

  editPizzaForm = (pizza) => {
    this.setState({
      targetPizza: pizza,
    });
  };

  updateTargetPizzaValue = (key, value) => {
    this.setState({
      targetPizza: { ...this.state.targetPizza, [key]: value },
    });
  };

  patchPizza = (event) => {
    // event.preventDefault();
    fetch(`http://localhost:3000/pizzas/${this.state.targetPizza.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.targetPizza),
    })
      .then((resp) => resp.json())
      .then((updatedPizza) => {
        const newPizzas = this.state.pizzas.map((statePizza) => {
          if (statePizza.id === updatedPizza.id) {
            return updatedPizza;
          } else {
            return statePizza;
          }
        });
        this.setState({
          pizzas: newPizzas,
        });
      });
  };

  render() {
    return (
      <Fragment>
        <PizzaForm
          pizza={this.state.targetPizza}
          patchPizza={this.patchPizza}
          updateTargetPizzaValue={this.updateTargetPizzaValue}
        />
        <Header />
        <PizzaList
          pizzas={this.state.pizzas}
          editPizzaForm={this.editPizzaForm}
        />
      </Fragment>
    );
  }
}

export default App;
