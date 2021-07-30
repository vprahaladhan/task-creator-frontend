import React, { Component } from 'react'
import axios from 'axios'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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

    render() {
        return (
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
            </div>
        )
    }
}

export default SignUpForm;
