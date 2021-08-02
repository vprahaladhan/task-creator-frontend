import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';

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

    handleErrors(string){
        let idx = this.props.errors.session.findIndex(error => error.includes(string))
        return <p>{this.props.errors.session[idx]}</p>;
      }

    render() {
        return (
            <div className="signup-form">
<<<<<<< HEAD
                <form onSubmit={this.handleSubmit}>
                <div className="errors">{this.handleErrors("Email")}</div>
=======
                <form onSubmit={this.handleSignup}>

>>>>>>> parent of 526b3e0... Hooked up redux
                    <input name="email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                    </input>

                    <div className="errors">{this.handleErrors("Password")}</div>
                    <input name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                    </input>

                    <div className="errors">{this.handleErrors("Password Confirmation")}</div>
                    <input name="password_confirmation"
                        type="password"
                        value={this.state.password_confirmation}
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

const mapStateToProps = ({session, entities: { users }, state}) => {
    return {
      errors: state.errors,
      currentUser: users[session.id]
    };
  };


const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(signup(user)),
      removeErrors: () => dispatch(removeErrors()),
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);