import React from "react";

const PizzaForm = (props) => {
  console.log(props.pizza);
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={props.pizza.topping}
          onChange={(event) => {
            props.updateTargetPizzaValue("topping", event.target.value);
          }}
        />
      </div>
      <div className="col">
        <select
          value={props.pizza.size}
          className="form-control"
          onChange={(event) => {
            props.updateTargetPizzaValue("size", event.target.value);
          }}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={props.pizza.vegetarian}
            onChange={(event) => {
              props.updateTargetPizzaValue("vegetarian", true);
            }}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={!props.pizza.vegetarian}
            onChange={(event) => {
              props.updateTargetPizzaValue("vegetarian", false);
            }}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.patchPizza}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
