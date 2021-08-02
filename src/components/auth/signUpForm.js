
import React, { Component } from 'react'
import axios from 'axios'
import history from '../../history'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        }
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignup(event) {
        event.preventDefault()

        axios.post('http://localhost:3001/api/register', {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }

        },
            { withCredentials: true }
        )
            .then(response => {
                console.log("response", response)
                if (response.data.status === 'created') {
                    console.log("Created:", response.data)
                }
                history.push("/")
            })
            .catch(error => {
                console.log("registration error", error,)
            })
    }

    render() {
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSignup}>

                    <input name="email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                    </input>
                    <br/>
                    <input name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                    </input>
                    <br/>
                    <input name="password_conformation"
                        type="password"
                        value={this.state.password_conformation}
                        onChange={this.handleChange}>
                    </input>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;