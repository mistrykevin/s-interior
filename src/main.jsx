import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';

import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectsDetail from './pages/ProjectsDetail.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Process from './pages/Process.jsx';
import Services from './pages/Services.jsx';
import Work from './pages/Work.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectsDetail />} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Process' element={<Process/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Work' element={<Work/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
