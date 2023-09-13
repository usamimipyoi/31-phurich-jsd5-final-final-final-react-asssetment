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
      <Home />
    </>
  },  
  {
    path: '/User',
    element: <>
      <Navbar />
      <User />
    </>
  },
  {
    path: '/Admin',
    element: <>
      <Navbar />
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
