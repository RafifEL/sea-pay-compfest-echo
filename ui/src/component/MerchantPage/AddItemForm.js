import React, {Component} from 'react'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class AddItemForm extends Component{
    render(){
        return(
            <div className = "container border border-width" style = {customBox(350,200)}>
                <h5> Add Item :</h5>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                        <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)"/>  
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Price</span>
                        <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)"/>  
                    </div>
                </div>
                <div className = "text-center">
                    <button type="submit" className="btn btn-primary mb-2">Add</button>
                </div>  
            </div>
        )
    }
}