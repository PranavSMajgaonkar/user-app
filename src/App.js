import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Login';
import DashboardComponent from './DashBoard';
import RegisterComponent from './Register'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginComponent />} />
                <Route path="/dashboard" element={<DashboardComponent />} />
                <Route path="/registration" element={<RegisterComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
