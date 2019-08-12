import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';

export default class MerchantRegist extends Component{
    state = {
        email: null,
        storeName: null,
        phoneNum: null,
        password: null,
        address: null,
        confirmPassword: null,
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        console.log(this.state);
        e.preventDefault();
    }
    render(){
        return (
            <div className = "justify-content-center row">
                <form onSubmit = {this.submitClick}>
                    <div className = "text-primary">
                        <h1 className = "display-5 mb-4">Merchant Sign Up</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="" placeholder="Enter Email"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="storeName">Store Name</label>
                        <input type="" className="form-control" id="storeName" aria-describedby="" placeholder="Store Name"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNum">Telephone Number</label>
                        <input type="" className="form-control" id="phoneNum" aria-describedby="" placeholder="Phone Number"
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="" className="form-control" id="address" aria-describedby="" placeholder="Address"
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