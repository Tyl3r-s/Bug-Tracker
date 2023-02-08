import React from "react";
import ViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from "react-redux";
import { markComplete } from '../../../Controllers/Redux/bugSlice';
import './bugView.css';

export default (props) => {
    const bug = new BugModel(props.bug);

    return (
        <div className="bug-view">
            <button onClick={props.clicked} className="close-btn">×</button>
            <div className="shortdeets">
                <h1>{bug.name}</h1>
                <ViewSection title="Priority" info={bug.priority} />
                <ViewSection title="Creator" info={bug.creator} />
                <ViewSection title="Time Created" info={bug.time} />
                <ViewSection title="App Version" info={bug.version} />
            </div>
            <div className="longdeets">
                <div className="steps">
                    <ViewSection title="Steps" info={bug.steps} />
                </div>
                <div className="details">
                    <ViewSection title="Details" info={bug.details} />
                </div>
            </div>

            <button onClick={() => { useDispatch(markComplete()) }} className="mark-complete">mark as resolved</button>
        </div>

    )
}