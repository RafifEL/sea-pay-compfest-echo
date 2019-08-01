import React, {Component} from 'react';

import './SelectItems.css'
import {customVouchText} from './CustomerMain'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};



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
                        {customVouchText('A', 200, 4)}
                        {customVouchText('A', 200, 4)}
                        {customVouchText('A', 200, 4)}
                        {customVouchText('A', 200, 4)}

                    </div>
                </div>    
            </div>
        );
    }
}