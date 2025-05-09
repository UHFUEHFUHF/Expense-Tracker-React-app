import React from 'react'

const InputFeild = () => {

  const Submit = (e) => {
    e.preventDefault();
    console.log(FormDataF(e.target));
  }

  const FormDataF = (form) => {
    const object = {}
    const formData = new FormData(form)
    for (const [key, value] of formData.entries()) {
      object[key] = value
    }
    return object;
  }

  return (
    <>
      <div className='form-container'>
        <form className='expense-form' onSubmit={Submit}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              className='form-input'
              placeholder='e.g. Grocery shopping'
              name='title'
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category" 
              className='form-input'
              placeholder='e.g. Food'
              name='category'
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor="amount">Amount</label>
            <div className='amount-input'>
              <span className='currency'>₹</span>
              <input 
                type="number" 
                id="amount" 
                className='form-input'
                placeholder='0.00'
                step="0.01"
                name='amount'
              />
            </div>
          </div>
          
          <button type="submit" className='submit-btn'>
            Add Expense
          </button>
        </form>
      </div>
    </>
  )
}

export default InputFeild;
