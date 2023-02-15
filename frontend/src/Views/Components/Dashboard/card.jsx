import React from 'react';
import './card.css';
import Priority from '../../../Controllers/priorityController';

export default (props) => {
    const {level, color} = Priority(props.Priority)

    return(
        <div className="dashboard-card" style={{color: color}}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}