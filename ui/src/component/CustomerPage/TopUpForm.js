import React, {Component} from 'react'


const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class TopUpForm extends Component{
    render(){
        return(
            <div className = "container border border-width mb-2" style = {customBox(350,135)}>
                <h5> Enter the Nominal :</h5>
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
        )
    }
}