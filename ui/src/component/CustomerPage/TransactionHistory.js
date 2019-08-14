import React, {Component} from 'react';

export default class TransactionHistory extends Component{
    render(){
        return(
            <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
                <div className = 'col border text-left'>
                    <h5>{this.props.type} {this.props.target}</h5>
                    <h6>Amount &#9;: {this.props.amount}</h6>
                </div>        
            </div>
        );
    }
}