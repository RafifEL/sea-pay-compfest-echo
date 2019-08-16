import React, {Component} from 'react';

export default class Item extends Component{
    render(){
        return(
            <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
                <div className = 'col border text-left'>
                        <h5>Item {this.props.name}</h5>
                        <h6>Dexcription {this.props.description}</h6>
                        <small>Price : {this.props.price}</small>
                </div>        
            </div>
        );
    }
}