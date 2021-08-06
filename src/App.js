import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getCurrentUser } from './redux/actions/userActions'
import NavBar from './components/NavBar'
import TaskList from './components/tasks/TaskList'
import InputTaskForm from './components/tasks/InputTaskForm'
import { ShowTask } from './components/tasks/ShowTask'


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
          <InputTaskForm
            {...props}
            currentUser={currentUser}
          />
        )} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path='/task/:id' render={match =>
        <ShowTask match={match}/>
      } />
      <Route path='/task/:id/edit' render={match =>
        <InputTaskForm match={match} />
      } />
    </Router>
  )
}

export default App;
