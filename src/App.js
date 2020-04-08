import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

// let API = "http://localhost:3000/pizzas";

class App extends Component {
	state = {
		pizzas: [],
		toppingInput: "",
		sizeOption: "",
		vegInput: "",
		editPizza: {},
	};

	componentDidMount() {
		fetch("http://localhost:3000/pizzas")
			.then((resp) => resp.json())
			.then((pizza) => this.getPizza(pizza));
	}

	getPizza = (pizza) => {
		this.setState({ pizzas: pizza });
	};

	handleEdit = (id) => {
		// //find object by id
		let pizzas = [...this.state.pizzas];

		let foundObject = pizzas.find((pizza) => pizza.id === id);

		this.setState({ editPizza: foundObject });
		console.log(id);
	};

	onType = (event) => {
		const typedValue = event.target.value;
		this.setState((prevState) => {
			return { editPizza: { ...prevState.editPizza, topping: typedValue } };
		});
	};

	onDropDown = (event) => {
		const typedValue = event.target.value;
		this.setState((prevState) => {
			return { editPizza: { ...prevState.editPizza, size: typedValue } };
		});
	};

	onSelect = (event) => {
		const isVeg = event.target.value === "Vegetarian";
		console.log(isVeg);
		this.setState((prevState) => {
			return { editPizza: { ...prevState.editPizza, vegetarian: isVeg } };
		});
	};

	onSubmit = (event) => {
		event.preventDefault();

		if (this.state.editPizza.id) {
			let pizzaId = this.state.editPizza.id;
			console.log(pizzaId);
			fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
				method: "PATCH", // or 'PUT'
				headers: {
					"Content-Type": `application/json`,
				},
				body: JSON.stringify(this.state.editPizza),
			})
				.then((response) => response.json())
				.then((pizzaObj) => {
					const newArrayOfPizzas = this.state.pizzas.map((pizza) => {
						if (pizza.id === pizzaId) {
							return pizzaObj;
						} else {
							return pizza;
						}
					});
					this.setState({ pizzas: newArrayOfPizzas });
				});
		}
	};

	render() {
		console.log(this.state.editPizza);
		return (
			<Fragment>
				<Header />
				<PizzaForm
					onType={this.onType}
					onDropDown={this.onDropDown}
					onSelect={this.onSelect}
					onSubmit={this.onSubmit}
					// toppingInput={this.state.toppingInput}
					// sizeOption={this.state.sizeOption}
					// vegInput={this.state.vegInput}
					editPizza={this.state.editPizza}
				/>
				<PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit} />
			</Fragment>
		);
	}
}

export default App;
