import React, { Component } from 'react';
import './Login.css'


class Login extends Component {
    render() {
      return (
        <div className="Login">
          <header className="Login-header">
            <p>Selamat datang di Banking Crowd Academy</p>
          </header>
          <div>
                <div>
                    <input type="text" placeholder="Username" name="username" required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" required/>
                </div>
                <a href="default.asp" target="_blank">This is a link</a>
                <button type="submit" className="">
                Login
                </button>
            </div>
        </div>
      );
    }
  }
  export default Login