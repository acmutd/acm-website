import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Apply from './components/Pages/Apply/Apply';
import Contact from './components/Pages/Contact/Contact';
import Events from './components/Pages/Events/Events';
import Officers from './components/Pages/Officers/Officers';
import Projects from './components/Pages/Projects'
import Test from './components/Pages/Test';


function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* just change this to switch between pages */}

      {/* Projects Page shows the side bar */}
      <About/>

      {/* Test Page shows the background moving circles animation */}
      {/* <Test></Test> */}
      {/* <Officers/> */}
      <Footer/>
    </div>
  );
}

export default App;
