import React, {Component} from 'react'
import TransactionHistoryBoard from './TransactionHistoryBoard.js'
import VouchersBoard from './VoucherBoard.js'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class TransactionVoucherBoard extends Component{
    render(){
        return(
            <div className="col text-center mb-4">
                <h4>Vouchers</h4>
                <VouchersBoard/>
                <h4>Transaction History</h4>
                <TransactionHistoryBoard/>
            </div>
        )
    }
}