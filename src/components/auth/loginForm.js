import React, { Component } from 'react'
import history from '../../history'

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        const {email, password, handleLogin, handleChange} = this.props
        return (
            <div>
                <form onSubmit={handleLogin}>

                    <input name="email"
                        value={email}
                        onChange={handleChange}>
                    </input>
                    <input name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}>
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