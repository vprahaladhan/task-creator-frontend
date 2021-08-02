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


    render() {
        const {email, password, handleLogin} = this.props
        return (
            <div>
                <form onSubmit={handleLogin}>

                    <input name="email"
                        value={email}
                        onChange={this.handleChange}>
                    </input>
                    <input name="password"
                        type="password"
                        value={password}
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
