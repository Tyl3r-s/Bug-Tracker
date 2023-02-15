import React, { useState } from 'react';
import './bugForm.css';
import BugModel from '../../../Models/bugModel';

export default (props) => {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e) {
        setBugObject({
            ...bugObject,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="bug-create">
            <button className="close-btn" onClick={props.close}>x</button>
            <h1>Create Bug</h1>
            <form>
                <label>Name:</label>
                <input name="name" placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name} />
                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description of the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name='Steps' placeholder='Describe steps taken to experience bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
                <label>Priority:</label>
                <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned:</label>
                <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                    <option>Tyler Scott</option>
                </select>
                <label>Application Version:</label>
                <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                <button type='submit'>{props.title}create</button>
            </form>
        </div>
    )
}