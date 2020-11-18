import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import '../style/Home.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className="header">
                    <Header/>
                </div>
                <div className="body">
                    
                    

                </div>
            </div>
            
        )
    }
}
export default Home;