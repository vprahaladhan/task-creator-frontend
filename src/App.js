import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/tasks/TaskList';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import SignUpForm from './components/auth/signUpForm';
import LoginForm from './components/auth/loginForm';
//User Auth



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
  
  }


  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
 

  handleLogout(event) {
    event.preventDefault()

    axios.delete('http://localhost:3001/api/v1/logout', 
      { withCredentials: true }
    )
      .then(response => {
        console.log("response", response)
        if (response.data.status === 'created') {
          console.log("Created:", response.data)
        }
      })
      .catch(error => {
        console.log("registration error", error,)
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1>Tasks</h1>
          <hr />

        </header>
        <TaskList />
        <LoginForm/>
        <Router>
            
            <Switch>
              {/* <Route
                exact path={"/"}
                render={props => (
                  <Home
                    {...props}
                  // handleLogout={this.handleLogout}

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
         <form onSubmit={this.handleLogout}>
            <button type="submit">
              Logout
            </button>
          </form>

        </div>

      );
  }
}

        export default App;
