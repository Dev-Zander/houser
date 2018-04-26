import React, { Component } from 'react';
import '../styles/style.css';
import logo from '../styles/auth_logo.png';
import axios from 'axios'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }



    loginCheck = () => {
        axios.get(`/api/login/${this.refs.users_name.value}/${this.refs.users_password.value}`)
        .then(res => {
            
            this.props.history.push('/dashboard', )  })
        .catch(() => {
            this.setState({
                error: 'Invalid username and/or Password.'
            })
        })}


    registerCheck = () => {
        axios.get(`/api/register/${this.refs.users_name.value}`)
        .then(user =>{
           axios.post(`/api/register/${this.refs.users_name.value}/${this.refs.users_password.value}`).then(user => {
            this.props.history.push('/dashboard')  })
        }) 
        .catch(res =>{
            this.setState({
                error: 'Username Already Exisit'
            })
        })

    }



    render() {
        return (
            <div className="main">

                <div className="main-box">

                    <img alt="logo" className="logo" src={logo} />
                    <div className="error">
                        {this.state.error}
                    </div>
                    <div className="username">Username</div>

                    <input ref="users_name" className="username-box" />

                    <div className="password">Password</div>

                    <input ref="users_password" type="password" className="password-box" />
                    <div className="buttons">
                        <button onClick={() => this.loginCheck()} className="login-button">
                            Login
            </button>
                        <button onClick={() => this.registerCheck()} className="register-button">
                            Register
            </button>
                    </div>

                </div>

            </div>



        )
    }
}
export default Login

