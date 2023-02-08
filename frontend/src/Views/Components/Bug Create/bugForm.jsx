import React from 'react';
import './bugForm.css';

export default (props) => {
    return (
        <div className="bug-create">
            <h1>Create Bug</h1>
            <form>
                <label>Name:</label>
                <input name="name" placeholder='Bug Name' required />
                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description of the bug' required></textarea>
                <label>Steps:</label>
                <textarea name='Steps' placeholder='Describe steps taken to experience bug' required></textarea>
                <label>Priority:</label>
                <select name='priority' required>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned:</label>
                <select name='assigned'>
                    <option>Tyler Scott</option>
                </select>
                <label>Application Version:</label>
                <input name='version' placeholder='Application Version'></input>
                <button type='submit'>{props.title}create</button>
            </form>
        </div>
    )
}