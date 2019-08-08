import React, {Component} from 'react';

import "./CustomerPage.css"
import ProfileBoard from './ProfileBoard.js'
import MerchantBoard from './MerchantBoard.js'
import VoucherBoard from './VoucherBoard.js'

export default class CustomerPage extends Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content">
                    <ProfileBoard/>
                    <MerchantBoard/>
                    <VoucherBoard/>             
                </div>
            </div>
        );
    }
}