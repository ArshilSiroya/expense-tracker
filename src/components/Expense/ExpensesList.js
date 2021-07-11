import React from  'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">no record found</h2>
    }


    return ( 
      <ul className="expenses-list">
        {props.items.map((value)=>(
        <ExpenseItem
        key={value.Id}
        title={value.title}
        amount={value.amount}
        date={value.date}
      />
    ))}
    </ul>
    );
};
export default ExpensesList;