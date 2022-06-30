import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Apply from './components/Pages/Apply';
import Contact from './components/Pages/Contact';
import Events from './components/Pages/Events';
import Officers from './components/Pages/Officers';
import Scholarship from './components/Pages/Scholarship';



function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* just change this to switch between pages */}
      <Scholarship/>
      
      <Footer/>
    </div>
  );
}

export default App;
