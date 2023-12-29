import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home/Home.jsx';
import { ThemeProvider } from './Provider/ThemeContext.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Demu from './Pages/Demu/Demu.jsx';
import ComponentLibrary from './Pages/ComponentLibrary/ComponentLibrary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/projectDetails/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch('data.json')
      },
      {
        path:'/demu',
        element:<Demu></Demu>
      },
      {
        path:'/componentLibrary',
        element:<ComponentLibrary></ComponentLibrary>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <div className='container mx-auto'>
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  // </div>,
)
