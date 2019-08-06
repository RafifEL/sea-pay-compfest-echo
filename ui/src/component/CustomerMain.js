import React, {Component} from 'react';

import "./CustomerMain.css"
import ProfileBoard from './Profile.js'
import MerchantBoard from './Merchant.js'
import VouchersBoard from './Voucher.js'

var profile = {
    name: 'Rafiffff',
    balance: 100000,
    seaPoints: 10000,
    loyaltyPoints: 10000
}

var merchantList = [
    {name: 'A',desc: 'sdff'},
    {name: 'B',desc: 'sdff'},
    {name: 'C',desc: 'sdff'},
    {name: 'D',desc: 'sdff'},
]

var voucherList = [
    {name:'A',discount:30,owned:2},
    {name:'B',discount:30,owned:2},
    {name:'C',discount:30,owned:2},
    {name:'D',discount:30,owned:2},
]

export default class CustomerMain extends Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content">
                    <ProfileBoard profile={profile}/>
                    <MerchantBoard merchantList={merchantList}/>
                    <VouchersBoard voucherList={voucherList}/>        
                </div>
            </div>
           
        );
    }
}