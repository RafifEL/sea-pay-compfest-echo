import React, {Component} from 'react';

import AddItemForm from './AddItemForm.js'

export default class MerchantPage extends Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content">
                    <AddItemForm/>
                </div>
            </div>
        );
    }
}