import React, {Component} from 'react';
import '../styles/style.css';
import logo from '../styles/header_logo.png';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class Header extends Component {
    

    logout =()=>{
        axios.post('/api/destroy').then(res =>{
           
            this.props.history.push(`/login`)
        }

        ).catch(res=>{
            console.log('Did not logout.')
        })
    }


    render(){
        return(
            <div className="header-main">


            <img alt="logo" className="header-logo" src={logo} />

            <div className="header-title1">Houser</div>
            <div className="header-title2">Dashboard</div>
            <div onClick={()=>this.logout()}className="logout">Logout</div>

            </div>
        )
    }
}

export default withRouter(Header)