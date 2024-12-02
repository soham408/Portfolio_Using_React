import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Layout from './Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Techskills from './Components/Techskill/Techskill.jsx';
import Projects from './Components/Project/Project.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Github from './Components/Github/Github.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='techskills' element={<Techskills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
        />
        
      </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)