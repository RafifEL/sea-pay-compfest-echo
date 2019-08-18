import React, {Component} from 'react'
import TopUpForm from './TopUpForm.js'
import axios from 'axios'
import TransferForm from './TransferForm.js'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class ProfileBoard extends Component{
    state = {
        userName: JSON.parse(localStorage.getItem("user")).userName,
        wallet:{
            walletId : JSON.parse(localStorage.getItem("user")).walletId,
            balance: 0,
            seaPoints: 0,
            loyaltyPoints: 0
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8189/walletservice/wallets/'+this.state.wallet.walletId)
        .then(response=>{
            this.setState({
                wallet: response.data
            })
        })
    }
    customLabelText = (label, text) =>{
        return(
            <div className="row" style = {{height:50}}>
                <div className="col">
                    <h6 className = 'mt-1 mb-1 text-left card-text display-5'>{label}</h6>
                </div>
                <div className = 'col-1 '>
                    <h6 className = 'mt-1 mb-0 card-text display-5'>:</h6>
                </div>
                <div class="col text-left">
                    <h5 className = 'mt-1 mb-1 card-text display-5'>{text}</h5>
                </div>
            </div>
            );
    }
    render(){
        return(
            <div className="col text-center mb-4">
                <h4>Information</h4>
                <div className = "container border border-width" style = {customBox(350,240)}>
                    {this.customLabelText('Nama', this.state.userName)}
                    {this.customLabelText('Wallet Id', this.state.wallet.walletId)}
                    {this.customLabelText('Balance(Rp)', this.state.wallet.balance)}
                    {this.customLabelText('SEA Points(SP)', this.state.wallet.seaPoints)}
                    {this.customLabelText('Loyal Points(LP)', this.state.wallet.loyaltyPoints)}
                </div>
                <h4 className= "">Topup</h4>
                <TopUpForm/>
                <h4 className= "">Transfer</h4>
                 <TransferForm/>
            </div>
        )
    }
}