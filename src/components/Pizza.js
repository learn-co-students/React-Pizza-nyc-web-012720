import React from "react"

const Pizza = (props) => {
  const pizza = props.pizza
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Vegetarian" : "Includes Meat"}</td>
      <td><button onClick={() => props.handleClick(pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
