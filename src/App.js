import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';

import ProjectsInfo from './components/Pages/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Route exact path='/' component={Home} />
        
        <Route exact path='/projects' component={ProjectsInfo} />
        <Route exact path='/contacts' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;