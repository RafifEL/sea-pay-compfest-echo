import React, {Component} from 'react';
import {withRouter} from 'react-router'

class Merchant extends Component{
    merchClick = (e) =>{
        this.props.history.push({
            pathname: '/item',
            state:{
                id: this.props.id
            }
        })
    }
    render(){
        return(
            <div className="row m-1" style = {{height: 100, overflow:"auto"}} onClick = {this.merchClick} >
                <div className = 'col border text-left'>
                    <h5>Merchant {this.props.name}</h5>
                    <h6>Short desc &#9;:</h6>
                    <pre style = {{fontSize:12, marginLeft:10}}>{this.props.desc}</pre>
                </div>        
            </div>
        );
    }
}

export default withRouter(Merchant)