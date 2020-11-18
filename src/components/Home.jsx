import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import pict from '../logo.svg'
class Home extends Component {
    render(){
        return(
            <div>
                <Header/>  
                <div>
                    <body background-image="img_juve.jpg">

                    </body>

                </div>
            </div>
            
        )
    }
}

export default Home;