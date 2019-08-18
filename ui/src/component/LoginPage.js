import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';
import Navbar from "./NavBar"
import Axios from 'axios';

export default class LoginPage extends Component{

    state = {
        userEmail: null,
        password: null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8188/userservice/login", this.state)
        .then(response=>{
            localStorage.setItem("user", JSON.stringify(response.data)) 
            if(JSON.parse(localStorage.getItem("user")).userId != null){
                this.props.history.push('/customer')
            }
        })
    }
    render(){
        return (
                <div>
                    <Navbar></Navbar>
                    <div className = "justify-content-center row">
                        <form onSubmit = {this.submitClick}>
                            <div className = "text-primary">
                                <h1 className = "display-5 mb-4">Welcome to SEA Pay</h1>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"
                                onChange = {this.handleChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"
                                onChange = {this.handleChange}/>
                            </div>
                            <div className = "text-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>     
                        </form>
                    </div>
                    <div className = "justify-content-center row mt-2">
                        <ul class="nav justify-content-center">
                            <li class="nav-item border-right">
                                <a class="nav-link" href="/customer-sign-up">Customer<br/>Sign Up</a>
                            </li>
                            <li class="nav-item border-left">
                                <a class="nav-link" href="/merchant-sign-up">Merchant<br/>Sign Up</a>
                            </li>       
                        </ul>
                    </div>
                </div>
        );
    }    
}
