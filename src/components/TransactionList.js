import React,{useContext} from 'react';
// import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
 
  
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        {transactions.map(transactions=>(  <li className="minus">
         {transactions.text} <span>-$400</span><button class="delete-btn">x</button>
        </li> ))}
       
      </ul>
    </>
  )
}
