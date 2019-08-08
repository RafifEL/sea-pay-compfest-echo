import React, {Component} from 'react'
import axios from 'axios'
// import TransactionHistoryBoard from './TransactionHistoryBoard.js'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class VouchersBoard extends Component{
    state={
        voucherList: []
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/coCoBdkQeq?indent=2')
        .then(response =>{
            this.setState({
                voucherList: response.data
            })
        })
    }
    customVoucherText = (name, discount, owned) =>{
        return(
            <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
                <div className = 'col border text-left'>
                        <h5>Voucher {name}</h5>
                        <h6>Discount {discount}%</h6>
                        <small>Owned : {owned}</small>
                </div>        
            </div>
        );
    }
    render(){
        return(
            <form action="">
                <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                    {this.state.voucherList.map(voucher => (
                        this.customVoucherText(voucher.name, voucher.discount, voucher.owned)
                    ))}
                </div>
            </form>
        )
    }
}