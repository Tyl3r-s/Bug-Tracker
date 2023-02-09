import React from 'react';
import './editPanel.css';

export default (props) => {
    return (
        <div className="edit-panel">
            <button onClick={props.editClicked}>edit</button>
            <button onClick={props.deleteClicked}>delete</button>
        </div>
    ) 
}