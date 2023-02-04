import React from 'react';
import Login from './Views/Login/login.jsx';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Views/Sidebar/sidebar.jsx';

function App() {
  const { auth } = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
      <>
      <Sidebar />
      </>
      }
    </Router>
  );
}

export default App;
