import React, {Component} from 'react';


class NavBar extends Component{
    state = {
        login: "None"
    }

    render(){
        if (this.state.login === "None"){
            return (
                <nav className="navbar navbar-dark bg-dark mb-4">
                    <span class="navbar-brand mb-0 h1">SEA Pay</span>
                </nav>
            );
        }
        
    }

}
export default NavBar;


    

