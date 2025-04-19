import { Children, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './components/layout/home/Home.jsx';
import { ErrorPage } from './components/layout/ErrorPage';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: ([{
        path: "/",
        element: <Home />,
      }])
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
