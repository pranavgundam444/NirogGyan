import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ViewDoctors from './components/ViewDoctors/ViewDoctors';
import Patient from './components/Patient/Patient';
import Login from './components/Login/Login';
import Doctor from './components/Doctor/Doctor';
import Home from './components/Home/Home';
import Nirogya from './components/Nirogya/Nirogya';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('jwt_token');
    const role = Cookies.get('role');

    if (token && role) {
      setLoggedIn(true);
      setRole(role);
    } else {
      setLoggedIn(false);
      setRole('');
    }

    setLoading(false);
  }, [loggedIn]);

  if (loading) return <div>Loading...</div>

  return (

    <Router>
      <Routes>
        <Route path='/' element={ loggedIn ? role === "Patient" ?  <Navigate to="/home" />
                : <Navigate to="/doctors" /> : <Nirogya />} />

        <Route
          path="/login"
          element={
            loggedIn
              ? role === 'Patient'
                ? <Navigate to="/home" />
                : <Navigate to="/doctors" />
              : <Login logged={setLoggedIn} />
          }
        />

        <Route 
          path='/home'
          element={
            loggedIn 
              ? role === "Patient"
                ? <Home logged={setLoggedIn}/> 
                : <Navigate to='/doctors' /> 
              : <Navigate to="/" />
          }
        />

        <Route
          path="/doctors"
          element={
            loggedIn ? role === 'Doctor' ? <Doctor logged={setLoggedIn} /> : <Navigate to='/patient' /> : <Navigate to='/' />
          }
        />

        <Route
          path="/patient"
          element={
            loggedIn ? role === "Patient" ? <ViewDoctors logged={setLoggedIn} /> : <Navigate to="/doctors" /> : <Navigate to="/" />
          }
        />

        <Route path="/doctor/:id" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;
