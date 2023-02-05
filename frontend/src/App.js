import React from 'react';
import Login from './Views/Login/login.jsx';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Views/Sidebar/sidebar.jsx';
import ViewBugPage from './Views/Pages/viewBugs';

function App() {
  const { auth } = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <Sidebar />
          <Routes>
            <Route path="/viewbugs" element={<ViewBugPage />}>
            </Route>
          </Routes>

        </>
      }
    </Router>
  );
}

export default App;
