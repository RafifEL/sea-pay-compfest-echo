import React, {Component} from 'react';

import AddVoucherForm from './AddVoucherForm'
import ProposalList from './ProposalList'

export default class AdminPage extends Component{
    render(){
        return(
            <div className="container mt-2">
                <div className="row justify-content">
                    <div className="col text-center mb-4">
                        <h4>Voucher Form</h4>
                        <AddVoucherForm/>
                    </div>

                    <div className="col text-center mb-4">
                        <h4>Proposal List</h4>
                        <ProposalList/>
                    </div>
                    
                </div>
            </div>
        );
    }
}