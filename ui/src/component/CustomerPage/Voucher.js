import React, {Component} from 'react'

export default class Voucher extends Component{
    render(){
        return(
            <div className="row m-1" style = {{height: 140, overflow:"auto"}} >
                <div className = 'col border text-left'>
                        <h5>Voucher {this.props.name}</h5>
                        <h6>Discount {this.props.discount}%</h6>
                        <small>Owned : {this.props.owned}</small>
                        <div className = "text-center">
                                <button type="submit" className="btn btn-primary">Buy</button>
                        </div>    

                </div>        
            </div>
        );
    }
}