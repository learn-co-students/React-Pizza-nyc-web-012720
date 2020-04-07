import React from "react"

const PizzaForm = (prop) => {
  const pizza = prop.editPizza

  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping} onChange={prop.handleChange}/>
        </div>
        <div className="col">
          <select name="size" value={pizza.size} className="form-control" onChange={prop.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" checked={pizza.vegetarian} onChange={prop.handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Not Vegetarian" checked={!pizza.vegetarian} onChange={prop.handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={prop.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
