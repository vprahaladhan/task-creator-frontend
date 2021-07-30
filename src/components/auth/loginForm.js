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
                if (response.data.user) {
                    this.props.history.push("/dashboard")
                }
            })
            .catch(error => {
                console.log("registration error", error,)
            })
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
