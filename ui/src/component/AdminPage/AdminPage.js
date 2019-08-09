import React, {Component} from 'react';

import AddVoucherForm from './AddVoucherForm.js'

export default class AdminPage extends Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content">
                    <AddVoucherForm/>
                </div>
            </div>
        );
    }
}