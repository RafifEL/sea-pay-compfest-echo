import React, {Component} from 'react';


class NavBar extends Component{
    state = {
        login: "None"
    }

    static setToLog = () => {
        this.setState({
            login: ""
        });
    }

    checkState = () => {
        if (this.state.login === "None"){
            return {display: "none"}   
        }
        else{
            return {display: ""}
        }
    }
        
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
                            <a className="dropdown-item" href="#">Edit Profile</a>
                            <a className="dropdown-item" href="#">My Cart</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;



    

