import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" onChange={(e) => props.handleChange(e)} value={
               props.pizza.topping
                
              }/>
        </div>
        <div className="col">
          <select value={props.pizza.size} name="size" onChange={(e) => props.handleChange(e)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" onChange={(e) => props.handleChange(e)} checked={props.pizza.vegetarian === "Vegetarian"}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" onChange={(e) => props.handleChange(e)} checked={props.pizza.vegetarian === "Not Vegetarian"}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
