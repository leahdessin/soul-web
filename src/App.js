import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HeaderNav from './HeaderNav';
import ContentPane from './ContentPane'
import Footer from './Footer'
//import bg_main from './img/bg_main.jpeg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <HeaderNav />
          <ContentPane header='test' />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
