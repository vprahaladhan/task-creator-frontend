import axios from 'axios';
import { AppBar, Container, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// import { connect } from 'react-redux'
// import { getCurrentUser, logout } from '../redux/actions/session_actions'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    console.log("What is userdata", this.props.userData)
  }

  // # withCredentials: true 
  handleLogout() {
    axios
      .delete("http://localhost:3001/api/v1/logout")
      .then(response => {
        console.log("Logout success", response.data)
        this.props.history.push("/login")
      })
      .catch(error => {
        console.log("logout error", error)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

  render() {
    const { userData } = this.props
    return (
      <nav>
        <AppBar position="static" color="primary">
          <Router>
          <Container>
          {
              userData ?
                <>
                  <Link to={{ pathname: '/logout' }}>
                    <Button className="dark-theme" onClick={this.handleLogout}>Logout</Button>
                  </Link>
                  {/* <span><strong>Welcome, {userData.user.first_name}</strong></span> */}
                </>
                :
                <>
                  <Link to={{ pathname: '/login' }}>
                    <Button className="dark-theme">Login</Button>
                  </Link>

                  <Link to="/sign-up" className="ml-auto">
                    <Button type="submit"
                      className="dark-theme">
                      Join
                    </Button>
                  </Link>
                </>

            }
            </Container>
          </Router>
            
        </AppBar>
      </nav>
    )
  }
}

// const mapStateToProps = state => {
//     return {
//       userData: state.user.user
//     }
//   }

//   const mapDispatchToProps = dispatch => {
//     return {
//       getCurrentUser: (user) => dispatch(getCurrentUser(user)),
//       logout: () => dispatch(logout(null))
//     }
//   }

export default NavBar
