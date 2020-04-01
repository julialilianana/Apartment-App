import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewAccount from './pages/NewAccount'


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
       <Router>
       <div>
       <h1>This is my Navigation</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/account">Create an Account</Link>
            </li>
          </ul>
        </nav>
         <Switch>
         <Route path="/account/" exact component={ NewAccount } />
         <Route path="/" exact component={ HomePage } />
        </Switch>
        </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
