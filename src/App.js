import React from 'react';
import './App.css';
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
