import React, {Component} from 'react'
import TopUpForm from './TopUp.js'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

const customLabelText = (label, text) =>{
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

export default class ProfileBoard extends Component{
    render(){
        return(
            <div className="col text-center mb-4">
                <h4>Profile</h4>
                <div className = "container border border-width" style = {customBox(350,205)}>
                    {customLabelText('Nama', this.props.profile.name)}
                    {customLabelText('Balance(Rp)', this.props.profile.balance)}
                    {customLabelText('SEA Points(Sp)', this.props.profile.seaPoints)}
                    {customLabelText('Loyal Points(Lp)', this.props.profile.loyaltyPoints)}
                </div>
                <h4 className= "">Topup</h4>
                <TopUpForm/>
            </div>
        )
    }
}