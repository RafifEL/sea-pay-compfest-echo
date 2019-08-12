import React, {Component} from 'react'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class AddItemForm extends Component{
    state = {
        name: null,
        price: null,
        shortdesc: null
    }
    render(){
        return(
            <div className = "container border border-width" style = {customBox(350,190)}>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Name</span>
                        <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)"/>  
                    </div>
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Price</span>
                        <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)"/>  
                    </div>
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Short Desc</span>
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