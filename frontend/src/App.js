import React from 'react';
import Login from './Views/Login/login.jsx';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Views/Sidebar/sidebar.jsx';
import ViewBugPage from './Views/Pages/viewBugs';
import CreateBug from './Views/Components/Bug Create/bugForm';

function App() {
  const { auth } = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <Sidebar />
          <Routes>
            <Route path="/viewbugs" element={<ViewBugPage />} />
            <Route path='/create' element={<div className='page-container'><CreateBug /></div>} />
          </Routes>

        </>
      }
    </Router>
  );
}

export default App;
