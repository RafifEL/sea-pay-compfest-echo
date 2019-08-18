import React, {Component} from 'react';
import Axios from 'axios';
//import {withRouter} from 'react-router-dom';

export default class CustomerRegist extends Component{
    state = {
        userEmail: null,
        userName: null,
        password: null,
        confirmPassword: null,
        walletId: null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword){
            Axios.post("http://localhost:8189/walletservice/wallet/register",{balance: 0})
            .then(response=>{
                this.setState({
                    walletId: response.data.walletId
                })
                Axios.post("http://localhost:8188/userservice/register", this.state)
                this.props.history.push("/")
            })
        }
    }
    render(){
        return (
            <div className = "justify-content-center row">
                <form onSubmit = {this.submitClick}>
                    <div className = "text-primary">
                        <h1 className = "display-5 mb-4">Customer Sign Up</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email address</label>
                        <input type="email" className="form-control" id="userEmail" aria-describedby="" placeholder="Enter Email"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Name</label>
                        <input type="" className="form-control" id="userName" aria-describedby="" placeholder="name"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter Password"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className = "text-center">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>     
                </form>
            </div>  
        );
    }    
}