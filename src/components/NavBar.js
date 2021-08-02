import axios from 'axios';
import { AppBar, Container, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// import { connect } from 'react-redux'
// import { getCurrentUser, logout } from '../redux/actions/session_actions'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("Props", this.props)
  }



  render() {
    const { isLoggedIn } = this.props
    return (
      <nav>
        <AppBar position="static" color="primary">
          <Router>
            <Container>
              {
                isLoggedIn ?
                  <>
                    <Link to={{ pathname: '/logout' }}>
                      <Button className="dark-theme" onClick={this.props.handleLogout}>Logout</Button>
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
