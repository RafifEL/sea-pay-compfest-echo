import React, {Component} from 'react';

import './SelectItems.css'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

const customItemText = (nameItem, desc, price) =>{
    return(
        <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
            <div className = 'col border text-left'>
                    <h5>Item {nameItem}</h5>
                    <h6>Dexcription {desc}</h6>
                    <small>Price : {price}</small>
            </div>        
        </div>
    );
}


export default class SelectItems extends Component{
    state = {
        login: "None"
    }
    render(){
        return (
            <div className = 'container'>
                <div className="row justify-content-around">
                    <div className="col-4 text-center mb-4">
                        <h4>Select Items</h4>    
                    </div>     
                </div>
                <div className="row justify-content-around">
                    <div className="col-4 border select-items"  style = {customBox(300, 400, "auto")} > 
                        {customItemText('A', 'asd', 4)}
                        {customItemText('A', 'asdf', 4)}
                        {customItemText('A', 'asdf', 4)}
                        {customItemText('A', 'asdf', 4)}

                    </div>
                </div>    
            </div>
        );
    }
}