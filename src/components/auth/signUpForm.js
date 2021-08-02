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

    handleErrors(string){
        let idx = this.props.errors.session.findIndex(error => error.includes(string))
        return <p>{this.props.errors.session[idx]}</p>;
      }

    render() {
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                <div className="errors">{this.handleErrors("Email")}</div>
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