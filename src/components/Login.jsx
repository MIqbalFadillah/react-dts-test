import React, { Component } from 'react';
import '../style/Login.css'


class Login extends React.Component {

  // constructor(props){
  //   super(props);
   
  // }



    render() {
      return (
        <div>
            <form class="modal-content animate" action="/action_page" method="post">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" 
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
  export default Login