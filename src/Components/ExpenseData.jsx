import React from "react";

const ExpenseData = ({expenses}) =>{
   const Total = expenses.reduce((sum , item) => sum + item.Amount , 0)
  
    return(
    <>
<div className="table-container">
      <table className="expense-table">
       
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
         { expenses.map(({id , title , category , Amount}) =>
        <tbody>
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{Amount}</td>
          </tr>
        
        </tbody>
        )}
       
          <tr className="total-row" >
            <td><strong>Total</strong></td>
            <td></td>
            <td><strong>₹{Total}</strong></td>
          </tr>
            
      </table>
    
    </div>
    </>

)

}

export default ExpenseData