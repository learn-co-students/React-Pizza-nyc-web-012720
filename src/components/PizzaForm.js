import React, {Component} from "react" 
class PizzaForm extends Component {
  state = {
    topping:'',
    size: '',
    vegetarian: false
  }
  componentDidUpdate(prevProps){
    if (prevProps.editPizza !== this.props.editPizza){
      this.setState({ topping: this.props.editPizza.topping,
                      size: this.props.editPizza.size, 
                      vegetarian: this.props.editPizza.vegetarian 
      }) 
    }
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value});
  }

  clearForm = (event) => { 
    event.preventDefault()
    this.props.handleSubmit(event)
    this.setState ({topping:'',
                    size: '',
                    vegetarian: false })         
   }
  render(){
  return(
    <form onSubmit={this.clearForm}>
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" 
                  name="topping"
                   placeholder="Pizza Topping" 
                   value={this.state.topping}
                   onChange={this.handleChange}
                   />
        </div>
        <div className="col">
          <select className="form-control"
            name="size" 
            value={this.state.size} 
            onChange={this.handleChange}
            >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" 
            name="vegetarian"
            value={this.state.vegetarian} 
            checked={this.state.vegetarian? true:false}
            onChange={this.handleChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" 
            name="vegetarian"
            value={this.state.vegetarian} 
            checked={this.state.vegetarian? false:true}
            onChange={this.handleChange}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
           onClick={console.log} value="Submit">Submit</button>
        </div>
      </div>
    </form>

  )
}
}

export default PizzaForm
