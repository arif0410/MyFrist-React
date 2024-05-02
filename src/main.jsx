import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ProductPage from './Pages/product.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductCrud from './Pages/crud.jsx';

const router = createBrowserRouter([
  {
    path :"/",
    element: <div>
                <p>Welcome</p>
                <h1>Tugas ada di /TugasReactJS</h1>
                <b><a href="/TugasReactJS">sini</a></b>
            </div>,
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
  },
  {
    path :"/Product",
    element: <div><ProductPage/></div>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/TugasReactJS",
    element: <div><ProductCrud/></div>,
    errorElement: <ErrorPage/>
  }
  

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
