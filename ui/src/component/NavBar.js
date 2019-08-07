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
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SEA Pay</a>
                {/* <form className="form-inline">
                    <div className = "navbar-nav mr-4">
                        <a className="nav-link " href="#">Home</a>
                    </div>
                    <div className = "navbar-nav mr-4">
                        <a className="nav-link " href="#">Profile</a>
                    </div>
                </form> */}
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav pt-1 ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div className="" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Edit Profile</a>
                                <a className="dropdown-item" href="#">My Cart</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;



    

