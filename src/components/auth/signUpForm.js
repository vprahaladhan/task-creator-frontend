import React, { Component } from 'react'
import axios from 'axios'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(this.state).
        then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>

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
