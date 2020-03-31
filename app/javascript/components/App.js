import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import './styles.css'

class App extends React.Component {
  render () {
    return (
       <Router>
        <React.Fragment>
          <Nav>
            <NavItem>
              <NavLink href="/home" tag={ Link }>Home</NavLink>
            </NavItem>
          </Nav>
          <Route path="/home" exact component={ Home } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App
