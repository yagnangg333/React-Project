import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
      path:'',
      element: <Home/>
      },
      {
        path:'About',
        element: <About/>
      },
      {
        path:'Contact',
        element: <Contact/>
      },
      {
        path:'User/:userid',
        element: <User/>
      },
      {
        path:'Github',
        element: <Github/>,
        loader: githubInfoLoader
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
