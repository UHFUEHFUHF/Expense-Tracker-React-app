import React from 'react'

 const Header = () => {
  return (
    <>
    <div className='Header-Container'>
    <div className='label'>
        <label htmlFor="label">Expense Tracker</label>
    </div>
    <div className='Sections'>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="#"><li>Me</li></a>
    </div>
    </div>
    </>
  )
}

export default Header