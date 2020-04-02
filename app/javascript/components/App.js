import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import NewAccount from './pages/NewAccount'
import ApartmentIndex from './pages/ApartmentIndex'


class App extends React.Component {
   constructor(props){
    super(props)
    this.state = {
      apartments: [],
    }
    
    this.getApartments()
   }
   
     componentDidMount(){
    	this.getApartments()
    }

    getApartments = () => {
      fetch("https://9eaf8b4411cb48d59cd49190940b72b1.vfs.cloud9.us-west-2.amazonaws.com/apartments")
      .then((response)=>{
        if(response.status === 200){
          return(response.json())  
        }
      })
      .then((apartmentsArray)=>{
        this.setState({ apartments: apartmentsArray })
      })
    }
  
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
         <Route exact path="/" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> }
            />
        </Switch>
        </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
