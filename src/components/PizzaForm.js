import React from "react"

const PizzaForm = (props) => {
  return (
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" onChange={(event) => props.editTopSize(event)} value={ props.toEdit ? props.toEdit.topping : '' }/>
        </div>
        <div className="col">
          <select value={props.toEdit.size && props.toEdit.size } name="size" onChange={(event) => props.editTopSize(event)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onClick={(boolean) => props.editVeg("true")} checked={ props.toEdit.vegetarian && true }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onClick={(boolean) => props.editVeg("false")} checked={ props.toEdit && props.toEdit.vegetarian ? false : true }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(event) => props.updatePizza(event)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
