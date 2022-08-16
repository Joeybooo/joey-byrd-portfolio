import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/About'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
