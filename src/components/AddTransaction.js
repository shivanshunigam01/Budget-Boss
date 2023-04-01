import React, {useState}from 'react'


export const AddTransaction = () => {
    const[text,setText]=useState('');
    const[amount,setAmount]=useState('0');
  return (
    <>
     <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label HtmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value )} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label HtmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value )} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        
    </>
  )
}
