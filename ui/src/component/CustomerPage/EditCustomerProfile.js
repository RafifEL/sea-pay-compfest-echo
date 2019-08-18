import React, {Component} from 'react';
import Axios from 'axios'
import NavBarCustomer from "./NavBarCustomer"
//import {withRouter} from 'react-router-dom';

export default class EditCustomerProfile extends Component{
    state = JSON.parse(localStorage.getItem("user"))
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        e.preventDefault()
        localStorage.setItem("user",JSON.stringify(this.state))
        Axios.post("http://localhost:8188/userservice/update", this.state)
    }
    render(){
        return (
            <div>
                <NavBarCustomer/>
                <div className = "justify-content-center row">
                    <form onSubmit = {this.submitClick}>
                        <div className = "text-primary">
                            <h1 className = "display-5 mb-4">Profile</h1>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userEmail">Email address</label>
                            <input type="email" className="form-control" id="userEmail" aria-describedby="" placeholder="Email"
                            onChange = {this.handleChange} value = {this.state.userEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">Name</label>
                            <input type="" className="form-control" id="userName" aria-describedby="" placeholder="Name"
                            onChange = {this.handleChange} value = {this.state.userName}/>
                        </div>
                        <div className = "text-center">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>     
                    </form>
                </div>
            </div>
              
        );
    }    
}