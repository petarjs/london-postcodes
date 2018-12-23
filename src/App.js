import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Index from './pages/Index'
import Wards from './pages/Wards'

class App extends Component {
  state = { menuExpanded: false }

  render() {
    const { menuExpanded } = this.state
    return (
      <Router>
        <div className="App">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src={require('./logo.svg')}
                  height="28"
                  alt=""
                />

                <span className="logo-text">
                  LONDON
                  <strong style={{ fontWeight: 700 }}>POSTCODES</strong>
                </span>
              </a>

              <a
                onClick={() => this.setState({ menuExpanded: !menuExpanded })}
                role="button"
                className={`navbar-burger burger ${ menuExpanded ? 'is-active': '' }`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarToggle">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div
              id="navbarToggle"
              className={`navbar-menu ${ menuExpanded ? 'is-active': '' }`}
            >
              <div className="navbar-end">
                <Link className="navbar-item" to="/">Postcodes</Link>
              </div>
            </div>
          </nav>

          <div className="section">
            <div className="container">
              <Route path="/" component={Wards} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
