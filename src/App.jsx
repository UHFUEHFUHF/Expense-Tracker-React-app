import {useState} from 'react'
import Header from './Components/Header'
import ExpenseData from './Components/ExpenseData'
import InputFeild from './Components/InputFeild'
import Data from './Data'
import './App.css'



function App() {
  
  const [Expenses , setExpenses] = useState(Data)



  return (
    <>
      <Header/>
      <div className=''>
      <InputFeild/>
      <ExpenseData expenses={Expenses}/>
      </div>
    </>
  )
}

export default App
