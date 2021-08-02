import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/tasks/TaskList';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import SignUpForm from './components/auth/signUpForm';
import LoginForm from './components/auth/loginForm';
import history from './history';
//User Auth

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleLogin(event) {
  event.preventDefault()
  console.log("Login function")
  const {email, password} = this.state
  const request = {"auth": {"email": email, "password": password}}
  console.log(request)
  fetch("http://localhost:3001/api/v1/user_token", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
  })
  .then(result => {
      console.log(result)
      localStorage.setItem("jwt", result.jwt)
      this.setState(({
        isLoggedIn: true
      }));
      history.push("/")
  })
  .catch(error => {
      console.log(error)
  })
} 


    // # withCredentials: true 
    handleLogout() {
      localStorage.removeItem("jwt")
      this.setState(({
        isLoggedIn: false
      }));
      history.push("/")
    }

  render() {
    return (
      <div className="App">
        <NavBar 
          handleLogout={this.handleLogout} 
          isLoggedIn={this.state.isLoggedIn} />
        <header className="App-header">
          <h1>Tasks</h1>
          <hr />

        </header>
        <TaskList />
        <Router>
            
            <Switch>
              {/* <Route
                exact path={"/"}
                render={props => (
                  <LoginForm
                    {...props}
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin}
                    state={this.state}

                  />
                )} /> */}

              {/* <Route
                path={"/dashboard"}
                render={props => (
                  <Dashboard
                    {...props}
                  />
                )} />
              <Route path='/pick-category' component={SplashPage} /> */}


              {/* <Route path='/pick-carer' render={props => (
                <CarersContainer
                  {...props}
                  handleLogout={this.handleLogout}
                />
              )} /> */}

              <Route path='/sign-up' render={props => (
                <SignUpForm
                  {...props}
                  handleChange={this.handleChange}
                  handleLogout={this.handleLogout}
                />
              )}
              />

              <Route path='/login' render={props => (
                <LoginForm
                  {...props}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  email={this.state.email}
                  password={this.state.password}
                />
              )} />
{/* 
              <Route path='/new-task' render={props => (
                <NewTask
                  {...props}
                  handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                />
              )} />

              <Route exact path='/my-tasks' component={MyTasks} />
              <Route exact path='/user-account' component={UserAccount} /> */}
            </Switch>

          </Router>

        </div>

      );
  }
}

        export default App;
