import React, {Component} from 'react';


import "./CustomerMain.css"

class CustomerMain extends Component{
    render(){
        const customBox = (width, height, overflow = "hidden") => {
            return {
                width: width,
                height: height,
                overflow: overflow
            };
        };
        return(
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-4 text-center mb-4">Select Merchant</div>
                    <div class="col-4 text-center mb-4">Topup</div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-4 border border-width"  style = {customBox(300, 300, "auto")} >
                        <div className = "container">

                        </div>
                    </div>
                    <div class="col-4 border border-width"  style = {customBox(300, 135)}>
                        <div className = "container">
                            <h5> Enter the Nominal :</h5>
                            {/* Topup Form*/}
                            <div class="input-group mb-3 justify-content-center">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Rp</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>  
                                </div>
                            </div>
                            <div className = "text-center">
                                <button type="submit" className="btn btn-primary" on >TopUp</button>
                            </div>  
                        </div>    
                    </div>
                </div>
            </div>
           
        );
    }

}
export default CustomerMain;
