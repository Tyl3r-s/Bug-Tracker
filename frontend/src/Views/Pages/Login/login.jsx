import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Controllers/Redux/authSlice';

import './login.css'


export default () => {

    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })

    function inputChanged(e) {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    function submit(e) {
        dispatch(signIn(formInput));
        e.preventDefault();
    }

    return(
        <div className="loginBg">
            <form className="login-panel">
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>log in</button>
            </form>
        </div>
    )
}