import React, {Component} from 'react';

export default class Item extends Component{
    checkAmount = () =>{
        if(this.props.amount != null){
            return "Amount : " + this.props.amount;
            
        }
    }

    render(){
        return(
            <div className="row m-1" style = {{height: 120, overflow:"auto"}} >
                <div className = 'col border text-left'>
                        <h5>{this.props.name}</h5>
                        <h6>{this.props.description}</h6>
                        <small>Price : {this.props.price}<br/></small>
                        <small>{this.checkAmount()}</small>
                </div>        
            </div>
        );
    }
}