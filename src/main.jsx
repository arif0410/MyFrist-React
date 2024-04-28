import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';

const router = createBrowserRouter([
  {
    path :"/",
    element: <div>hallo bella</div>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/login",
    element: <div><LoginPage/></div>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/Register",
    element: <div><RegisterPage/></div>,
    errorElement: <ErrorPage/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
