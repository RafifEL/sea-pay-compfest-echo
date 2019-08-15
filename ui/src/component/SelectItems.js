import React, {Component} from 'react';

import './SelectItems.css'
import Item from './Item';

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
                        <Item name = {"Buku Bagus"} description = {"mahal tapi"} price = {100000}/>
                        <Item name = {"Buku mahal"} description = {"mahal tapi"} price = {220000}/>
                        <Item name = {"Buku kecil"} description = {"mahal tapi"} price = {150000}/>
                        <Item name = {"Buku Jelek"} description = {"murah tapi"} price = {10000}/>
                    </div>
                </div>    
            </div>
        );
    }
}