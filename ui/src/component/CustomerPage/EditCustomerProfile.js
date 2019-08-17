import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';

export default class EditCustomerProfile extends Component{
    state = {
        profile: null
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/bVDvTRWfaW?indent=2')
        .then(response =>{
            this.setState({
                profile: response.data
            })
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        
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
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="" placeholder="Enter Email"
                        onChange = {this.handleChange} value = {this.state.profile.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="storeName">Name</label>
                        <input type="" className="form-control" id="name" aria-describedby="" placeholder="name"
                        onChange = {this.handleChange} value = {this.state.profile.email}/>
                    </div>
                    <div className = "text-center">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>     
                </form>
            </div>  
        );
    }    
}