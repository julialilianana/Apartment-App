import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewAccount from './pages/NewAccount'


class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
      {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
      }
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
