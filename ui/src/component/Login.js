import React from 'react';
//import {withRouter} from 'react-router-dom';

const Login = (props) => {
    const submitClick = (e) => {
        //e.preventDefault();
        props.history.push('/customerhome')
    }
    return (
        <div className = "justify-content-center row">
        <form onSubmit = {submitClick}>
            <div className = "text-primary">
                <h1 className = "display-5 mb-4">Welcome to SEA Pay</h1>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1 ">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className = "text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>     
        </form>
    </div>  
    );    
}
export default Login;
