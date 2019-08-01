import React, {Component} from 'react';


import "./CustomerMain.css"
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

const customMerchText = (storeName, shortDesc) =>{
    return(
        <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
            <div className = 'col border text-left'>
                <h5>Merchant {storeName}</h5>
                <h6>Short desc &#9;:</h6>
                <pre style = {{fontSize:12, marginLeft:10}}>{shortDesc}</pre>
            </div>        
        </div>
        );
}

export const customVouchText = (nameVouch, disc, owned) =>{
    return(
        <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
            <div className = 'col border text-left'>
                    <h5>Voucher {nameVouch}</h5>
                    <h6>Discount {disc}%</h6>
                    <small>Owned : {owned}</small>
            </div>        
        </div>
    );
}

 
const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class CustomerMain extends Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content">
                    <div className="col text-center mb-4">
                        <h4>Profile</h4>
                        <div className = "container border border-width" style = {customBox(350,205)}>
                            {customLabelText('Nama', 'Rafif')}
                            {customLabelText('Balance(Rp)', '20000')}
                            {customLabelText('SEA Points(Sp)', '2000')}
                            {customLabelText('Loyal Points(Lp)', '2000')}
                        </div>
                        <h4 className= "">Topup</h4>
                        <div className = "container border border-width" style = {customBox(350,135)}>
                            <h5> Enter the Nominal :</h5>
                            {/* Topup Form*/}
                            <div className="input-group mb-3 mt-2 justify-content-center">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Rp</span>
                                    <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)"/>  
                                </div>
                            </div>
                            <div className = "text-center">
                                <button type="submit" className="btn btn-primary mb-2">TopUp</button>
                            </div>  
                        </div>    
                    </div>
                    <div className="col text-center mb-4">
                        <h4>Select Merchant</h4>
                        <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                            {customMerchText('A', 'SSNKSQM')}
                            {customMerchText('B', 'SSLNJKL')}
                            {customMerchText('C', 'SSKNKLN')}
                            {customMerchText('D', 'SSJIOJIOJ')}
                        </div>
                    </div>
                    <div className="col text-center mb-4">
                        <h4>Vouchers</h4>
                        <form action="">
                            <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                                {customVouchText('A', 30, 3)}
                                {customVouchText('A', 30, 3)}
                                {customVouchText('A', 30, 3)}
                                {customVouchText('A', 30, 3)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        );
    }

}

