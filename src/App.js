import React from 'react';
import './App.css';
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Nav from './components/Nav';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Nav></Nav>
        <Homepage></Homepage>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
