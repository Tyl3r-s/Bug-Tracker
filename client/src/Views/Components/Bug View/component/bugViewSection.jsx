import React, { useId } from "react";
import './bugViewSection.css';

export default (props) => {

    return (
        <div className='view-section' id={useId}>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}