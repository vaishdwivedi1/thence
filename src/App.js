import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Success from './pages/Success';
import Home from './pages/Home';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/success",
    element: <Success/>
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
