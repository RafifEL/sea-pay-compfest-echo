import React, {Component} from 'react';

import SelectItems from './SelectItems';
import MyCart from "./MyCart"
import ProfileBoard from "../ProfileBoard"

export default class SelectItemPage extends Component{
    state = {
        login: "None"
    }
    render(){
        return (
            <div className = 'container'>
                <div className="row justify-content-around">
                    <ProfileBoard/>
                    <SelectItems/>   
                    <MyCart/>     
                </div>  
            </div>
        );
    }
}