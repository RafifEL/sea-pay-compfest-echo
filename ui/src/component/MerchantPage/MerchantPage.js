import React, {Component} from 'react';

import AddItemForm from './AddItemForm.js'
import ItemList from "./ItemList"
import MerchantProfile from "./MerchantProfie"

export default class MerchantPage extends Component{
    render(){
        return(
            <div className="container mt-2">
                <div className="row justify-content">
                    <div className="col text-center mb-4">
                        <h4>Information</h4>
                        <MerchantProfile/>
                    </div>
                    <div className="col text-center mb-4">
                        <h4>Add Item</h4>
                        <AddItemForm/>
                    </div>
                    <div className="col text-center mb-4">
                        <h4>Item List</h4>
                        <ItemList/>
                    </div>

                </div>
            </div>
        );
    }
}