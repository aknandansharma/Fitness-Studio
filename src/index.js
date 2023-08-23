import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import EnrollNow from './components/Enroll Now/EnrollNow';
import Login from './components/Enroll Now/pages/Login'
import Register from './components/Enroll Now/pages/Register'
import Protected from './components/Protected';
import UserDetails from './components/Enroll Now/pages/UserDetails'
import Discount from './components/Enroll Now/pages/Discount'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<EnrollNow />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Protected />} >
        <Route path="userdetails" element={<UserDetails />} >
          <Route path="discount" element={<Discount />} />
        </Route>
      </Route>


    </Route>
  )
);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);


