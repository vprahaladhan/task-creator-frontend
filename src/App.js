import React, {useEffect} from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import { getCurrentUser } from './redux/actions/userActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import { useDispatch } from 'react-redux'


const App = () => {
  const currentUser = useSelector(state => state.currentUser)

  console.log(currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getCurrentUser())
    }, [dispatch])

  return (
    <Router>
      <NavBar/>
      <Route
                exact path={"/"}
                render={props => (
                  <Home
                    {...props}
                    currentUser={currentUser}
                  // handleLogout={this.handleLogout}
                  />
                )} />

      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      
   </Router>
  )
}

export default App;
