import React from 'react';

const PizzaForm = (props) => {
  const { topping, size, vegetarian } = props.pizza;
  return (
    <div className='form-row'>
      <div className='col-5'>
        <input
          type='text'
          className='form-control'
          placeholder='Pizza Topping'
          value={topping}
          name='topping'
          onChange={props.onSubmit}
        />
      </div>
      <div className='col'>
        <select
          value={size}
          className='form-control'
          name='size'
          onChange={props.onSubmit}>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
      </div>
      <div className='col'>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='vegetarian'
            value='Vegetarian'
            onChange={props.onSubmit}
            checked={vegetarian ? vegetarian : false}
          />
          <label className='form-check-label'>Vegetarian</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='vegetarian'
            value='Not Vegetarian'
            onChange={props.onSubmit}
            checked={vegetarian ? vegetarian : false}
          />
          <label className='form-check-label'>Not Vegetarian</label>
        </div>
      </div>
      <div className='col'>
        <button
          type='submit'
          className='btn btn-success'
          onClick={props.postFetch}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
