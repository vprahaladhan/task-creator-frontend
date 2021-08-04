import React, {useEffect} from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
<<<<<<< HEAD

  return (
    <Router>
      <Route exact path="/" component={Home} />
=======
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
                  <LoginForm
                    {...props}
                    currentUser={currentUser}
                  // handleLogout={this.handleLogout}
                  />
                )} />

>>>>>>> parent of 25c639e... commit stash
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      
   </Router>
  )
}

export default App;
