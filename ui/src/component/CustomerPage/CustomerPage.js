import React, {Component} from 'react';

import "./CustomerPage.css"
import ProfileBoard from './ProfileBoard.js'
import MerchantBoard from './MerchantBoard.js'
import TransactionVoucherBoard from  './TransactionVoucherBoard'
import NavBarCustomer from "./NavBarCustomer"

export default class CustomerPage extends Component{
    render(){
        return(
            <div>
                <NavBarCustomer/>
                <div className="container">
                    <div className="row justify-content">
                        <ProfileBoard/>
                        <MerchantBoard/>
                        <TransactionVoucherBoard/>             
                    </div>
                </div>
            </div>    
            
        );
    }
}