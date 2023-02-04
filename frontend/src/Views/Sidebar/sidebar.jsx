import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../Controllers/Redux/authSlice';
import './sidebar.css'

export default () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(state => state)

    function SignOut() {
        dispatch(signOut());
    }

    return (
        <div className="sidebar">
            <Link className='nav-link' to='/'><h1 className="brand">Bug-Tracker</h1></Link>
            <ul>
                <l1><Link to='/' className='nav-link'>Dashboard</Link></l1>
                <l1><Link to='/viewbugs' className='nav-link'>View Bugs</Link></l1>
                {auth.admin && <l1><Link to='/create' className='nav-link'>Create Bug</Link></l1> }
            </ul>
            <button className="logout" onClick={SignOut}>logout</button>
        </div>
    )
}