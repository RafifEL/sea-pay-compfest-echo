import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';

export default class CustomerRegist extends Component{
    state = {
        userEmail: null,
        userName: null,
        password: null,
        confirmPassword: null,
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        if(this.state.password === this.state.confirmPassword){
            this.props.history.push("/")
            //http request
            e.preventDefault();
        }
        e.preventDefault();
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