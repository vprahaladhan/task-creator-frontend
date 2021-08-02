import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleLogin(event) {
    //     event.preventDefault()

    //     axios.post('http://localhost:3001/api/v1/user_token', {
    //         user: {
    //             email: this.state.email,
    //             password: this.state.password
    //         }

    //     },
    //         { withCredentials: true }
    //     )
    //         .then(response => {
    //             console.log("response", response)
    //             if (response.data.user) {
    //                 this.props.history.push("/dashboard")
    //             }
    //         })
    //         .catch(error => {
    //             console.log("registration error", error,)
    //         })
    // }

    handleLogin (event) {
        event.preventDefault()
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
        })
        .catch(error => {
            console.log(error)
        }) 
        // $.ajax({
        //   url: "http://localhost:3000/api/v1/user_token",
        //   type: "POST",
        //   data: request,
        //   dataType: "json",
        //   success: function (result) {
        //     console.log(result)
        //     localStorage.setItem("jwt", result.jwt)
        //   }
        // })
      }    

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default LoginForm;
