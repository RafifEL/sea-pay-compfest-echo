import React, {Component} from 'react';
import {Link} from "react-router-dom"


class NavBar extends Component{    
    render(){
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SEA Pay</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" href="#">Edit Profile</Link>
                                <Link className="dropdown-item" href="#">My Cart</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;