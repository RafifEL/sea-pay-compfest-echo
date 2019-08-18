import React, {Component} from 'react'
import Axios from 'axios'

export default class TopUpForm extends Component{

    state = {
        amount: null,
        walletId: JSON.parse(localStorage.getItem("user")).walletId
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: parseInt([e.target.value])
        });     
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post("http://localhost:8189/walletservice/topup", this.state)
        window.location.reload()       
    }
    
    render(){
        return(
            <form className = "container border border-width mb-2" onSubmit = {this.handleSubmit} style = {{width: 350, height: 135}}>
                <h5> Enter the Nominal :</h5>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Rp</span>
                        <input type="number" className="form-control " id = "amount" aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                </div>
                <div className = "text-center">
                    <button type="submit" className="btn btn-primary mb-2">TopUp</button>
                </div>  
            </form>
        )
    }

}