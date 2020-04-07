import React from "react"

const PizzaForm = (props) => {
  const pizza = props.editPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" onChange={props.handleChange} value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} name="size" onChange={props.handleChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian"onChange={props.handleVegetarian} checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" onChange={props.handleVegetarian} checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
