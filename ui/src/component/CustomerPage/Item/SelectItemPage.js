import React, {Component} from 'react';

import SelectItems from './SelectItems';
import MyCart from "./MyCart"
import ProfileBoard from "../ProfileBoard"
import NavBarCustomer from "../NavBarCustomer"

export default class SelectItemPage extends Component{
    state = {
        login: "None"
    }
    render(){
        return (
            <div>
                <NavBarCustomer/>
                <div className = 'container'>
                    <div className="row justify-content-around">
                        <ProfileBoard/>
                        <SelectItems merchantId={this.props.location.state.id}/>   
                        <MyCart/>     
                    </div>  
                </div>
            </div>
            
        );
    }
}