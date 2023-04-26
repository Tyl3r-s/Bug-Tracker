import React from 'react';
import './card.css';
import Priority from '../../../Controllers/priorityController';

export default (props) => {
    const { level, color } = Priority(props.priority)

    return(
        <div className="dashboard-card" onClick={props.clicked} style={{color:color}}>
            <h2>Severity: {level}</h2>
            <p>total: {props.count}</p>
        </div>
    )
}