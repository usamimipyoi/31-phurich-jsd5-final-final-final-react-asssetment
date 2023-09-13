import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home';
import Owner from './Owner';
import User from './User';
import Admin from './Admin';
import "./App.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <header>
            <h1>Generation Thailand <br />React - Assessment</h1>
      </header>
      <Home />
    </>
  },  
  {
    path: '/User',
    element: <>
      <Navbar />
      <header>
            <h1>Generation Thailand <br />React - User Sector</h1>
          </header>
      <User />
    </>
  },
  {
    path: '/Admin',
    element: <>
      <Navbar />
      <header>
            <h1>Generation Thailand <br />React - Admin Sector</h1>
      </header>
      <Admin />
    </>
  },
  {
    path: '/Owner',
    element: <>
      <Navbar />
      <Owner />
    </>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
