import React, {Component} from 'react';
import axios from 'axios'
import Merchant from './Merchant';

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class MerchantBoard extends Component{
    state={
        merchantList: []
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/cfxZAVZQia?indent=2')
        .then(response =>{
            this.setState({
                merchantList: response.data
            })
        })
    }
    render(){
        return(
            <div className="col text-center mb-4">
                <h4>Select Merchant</h4>
                <div className = "container border border-width" style = {customBox(350,400,"auto")}>
                    {this.state.merchantList.map(merchant => (
                        <Merchant name = {merchant.name} desc = {merchant.desc} id={merchant.id}/>
                    ))}
                </div>
            </div>
        )
    }
}