import React, {Component} from 'react';
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
        //Axios.patch(url, JSON.stringify(this.state))
        e.preventDefault();
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
                            onChange = {this.handleChange} value = {JSON.parse(localStorage.getItem("user")).userName}/>
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