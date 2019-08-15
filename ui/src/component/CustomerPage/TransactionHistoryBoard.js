import React, {Component} from 'react';
import axios from 'axios'
import TransactionHistory from './TransactionHistory';

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class TransactionHistoryBoard extends Component{
    state={
        transactionHistoryList: []
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/bVDvTRWfaW?indent=2')
        .then(response =>{
            this.setState({
                transactionHistoryList: response.data
            })
        })
    }
    render(){
        return(
            <div className="col text-center mb-4">  
                <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                    {this.state.transactionHistoryList.map(transactionHistory => (
                        <TransactionHistory 
                        type = {transactionHistory.type} 
                        target = {transactionHistory.target}
                        amount = {transactionHistory.amount}
                    />
                    ))}
                </div>
            </div>
        )
    }
}