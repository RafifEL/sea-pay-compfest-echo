import React, {Component} from 'react';



class NavBar extends Component{
    state = {
        login: "None"
    }
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark mb-4">
                <span className="navbar-brand mb-0 h1">SEA Pay</span>
            </nav>
        );
    }
}
export default NavBar;



    

