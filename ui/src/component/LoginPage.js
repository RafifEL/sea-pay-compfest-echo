import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';

export default class LoginPage extends Component{

    state = {
        emailLog: null,
        passwordLog: null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    submitClick = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.history.push('/customer')
    }
    render(){
        return (
                <div>
                    <div className = "justify-content-center row">
                        <form onSubmit = {this.submitClick}>
                            <div className = "text-primary">
                                <h1 className = "display-5 mb-4">Welcome to SEA Pay</h1>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailLog">Email address</label>
                                <input type="email" className="form-control" id="emailLog" aria-describedby="emailHelp" placeholder="Enter email"
                                onChange = {this.handleChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordLog">Password</label>
                                <input type="password" className="form-control" id="passwordLog" placeholder="Password"
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
