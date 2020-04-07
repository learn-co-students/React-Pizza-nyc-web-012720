import React from "react";

class Pizza extends React.Component {
  handleBoolean = () => {
    if (this.props.pizza.vegetarian === true) {
      return "Yes";
    } else {
      return "No";
    }
  };

  render() {
    return (
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.handleBoolean()}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.editPizzaForm(this.props.pizza);
            }}
          >
            Edit Pizza
          </button>
        </td>
      </tr>
    );
  }
}

export default Pizza;
