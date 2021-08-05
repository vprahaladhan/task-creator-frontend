import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getCurrentUser } from './redux/actions/userActions'
import NavBar from './components/NavBar'
import TaskList from './components/tasks/TaskList'
import NewTaskForm from './components/tasks/NewTaskForm'


const App = () => {
  const currentUser = useSelector(state => state.currentUser)

  console.log(currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <Router>
      <NavBar />
      <Route
        exact path={"/"}
        render={props => (
          <Home
            {...props}
            currentUser={currentUser}
          // handleLogout={this.handleLogout}
          />
        )} />
      <Route exact path="/tasks" component={TaskList} />
      <Route 
        path="/tasks/new" 
        render={props => (
          <NewTaskForm
            {...props}
            currentUser={currentUser}
            />
            )}/>
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />

    </Router>
  )
}

export default App;
