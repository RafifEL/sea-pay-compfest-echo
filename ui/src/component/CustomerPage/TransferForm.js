import React, {Component} from 'react'
import Axios from 'axios'
export default class TransferForm extends Component{
    state = {
        walletId: JSON.parse(localStorage.getItem("user")).walletId,
        amount: null,
        receiverId: null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: parseInt(e.target.value)
        });     
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        Axios.post("http://localhost:8189/walletservice/transfer",this.state)
        window.location.reload()
    }
    render(){
        return(
            <form className = "container border border-width" onSubmit = {this.handleSubmit} style = {{width: 350, height: 160}}>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend mb-2">
                        <span className="input-group-text">Receiver Wallet ID</span>
                        <input type="text" className="form-control" id = "receiverId" aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Amount</span>
                        <input type="text" className="form-control" id = "amount"  aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                </div>
                <div className = "text-center">
                    <button type="submit" className="btn btn-primary mb-2">Transfer</button>
                </div>  
            </form>
        )
    }
}