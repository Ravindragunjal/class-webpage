import React from 'react';

import {Routes,Route} from 'react-router-dom';
import Home from "./Compo/Home";
import About from "./Compo/About";
import Courses from "./Compo/Courses";
import Contact from "./Compo/Contact";
import Gallery from "./Compo/Gallery";
import Footer from "./Compo/Footer";
import List  from "./Compo/List";
//import Error from "./Compo/Error";

function App() {
  return (
   <>
   <List />
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    
    </Routes>
    <Footer/>
</>

  );
}

export default App;
