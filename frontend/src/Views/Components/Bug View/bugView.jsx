import React, { useState } from "react";
import ViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import { useDispatch } from "react-redux";
import { markComplete } from '../../../Controllers/Redux/bugSlice';
import EditPanel from '../edit delete/editPanel';
import EditBug from '../Bug Create/bugForm';

import './bugView.css';

export default (props) => {

    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    const [displayEdit, setDisplayEdit] = useState(false);

    function editClicked() {
        setDisplayEdit(!displayEdit)
    }

    function deleteClicked() {

    }

    return (
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
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

            <button onClick={() => { dispatch(markComplete()) }} className="mark-complete">mark as resolved</button>
        </div>
        {displayEdit && <EditBug title="Edit Bug" bug={bug} />}
        </>
    )
}