import React, {Component} from 'react'
import TopUpForm from './TopUpForm.js'
import axios from 'axios'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class ProfileBoard extends Component{
    state = {
        profile:{
            name: 'DefaultName',
            balance: 0,
            seaPoints: 0,
            loyaltyPoints: 0
        }
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/cghfdloRTS?indent=2')
        .then(response=>{
            this.setState({
                profile: response.data
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
                <h4>Profile</h4>
                <div className = "container border border-width" style = {customBox(350,205)}>
                    {this.customLabelText('Nama', this.state.profile.name)}
                    {this.customLabelText('Balance(Rp)', this.state.profile.balance)}
                    {this.customLabelText('SEA Points(Sp)', this.state.profile.seaPoints)}
                    {this.customLabelText('Loyal Points(Lp)', this.state.profile.loyaltyPoints)}
                </div>
                <h4 className= "">Topup</h4>
                <TopUpForm/>
            </div>
        )
    }
}