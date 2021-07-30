import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/tasks/TaskList';
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup(event) {
    event.preventDefault()

    axios.post('http://localhost:3001/api/v1/register', {
      user: {
        email: this.state.email,
        password: this.state.password
      }

    },
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

  handleLogin(event) {
    event.preventDefault()

    axios.post('http://localhost:3001/api/v1/login', {
      user: {
        email: this.state.email,
        password: this.state.password
      }

    },
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
        <header className="App-header">
          <h1>Tasks</h1>
          <hr />

        </header>
        <TaskList />
        {/* SIGNUP */}
        <div className="signup-form">
          <form onSubmit={this.handleSignup}>

            <input name="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
            <input name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>

            <button type="submit">
              Submit
            </button>
          </form>
          <br/><br/>

          {/* LOGIN */}
          <form onSubmit={this.handleLogin}>

            <input name="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
            <input name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>

            <button type="submit">
              Login
            </button>
          </form>
          <br/><br/>

          {/* LOGOUT */}

         <form onSubmit={this.handleLogout}>
            <button type="submit">
              Logout
            </button>
          </form>

        </div>
      </div>

      );
  }
}

        export default App;
