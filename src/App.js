import React from "react";
import { Routes, Route } from "react-router-dom";
import EnrollNow from './components/Enroll Now/EnrollNow';
import Login from './components/Enroll Now/pages/Login'
import Register from './components/Enroll Now/pages/Register'
import UserDetails from './components/Enroll Now/pages/UserDetails'
import Discount from './components/Enroll Now/pages/Discount'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<EnrollNow/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/userdetails" element={<UserDetails/>} />
                <Route path="/discount" element={<Discount/>} />
            </Routes>
        </>
    );
};

export default App;
