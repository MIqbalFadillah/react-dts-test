import React, { Component } from 'react';
import '../style/Login.css'


class Login extends React.Component {

  constructor(props,context){
    super(props, context);
    this.state = {
      isActive: true,
    }
    this.hideAlert = this.hideAlert.bind(this);
  }

  hideAlert(){
    this.setState({
      isActive: false,
    });
  }

    render() {
      if(this.state.isActive){
        return (
          <div className="container">
              <form class="modal-content animate" action="/action_page" method="post">
                <div class="imgcontainer">
                  <span onClick={this.hideAlert} 
                  class="close" title="Close Modal">&times;</span>
                  <h4>Selamat Datang di Banking Crowd Academy</h4>
                </div>
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <br></br>
                  <input type="text" placeholder="Enter Username" name="uname" required/>
                  <br></br>
                  <label for="psw"><b>Password</b></label>
                  <br></br>
                  <input type="password" placeholder="Enter Password" name="psw" required/>
                  <br></br>
                  <button type="submit">Login</button>

                </div>
              </form>

            </div>
        );
      }
    }
  }
  export default Login