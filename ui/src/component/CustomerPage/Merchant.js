import React, {Component} from 'react';

export default class Merchant extends Component{
    render(){
        return(
            <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
                <div className = 'col border text-left'>
                    <h5>Merchant {this.props.name}</h5>
                    <h6>Short desc &#9;:</h6>
                    <pre style = {{fontSize:12, marginLeft:10}}>{this.props.desc}</pre>
                </div>        
            </div>
        );
    }
}