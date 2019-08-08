import React, {Component} from 'react';
import axios from 'axios'

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class TransactionHistoryBoard extends Component{
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
    customMerchText = (storeName, shortDesc) =>{
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
    render(){
        return(   
            <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                {this.state.merchantList.map(merchant => (
                    this.customMerchText(merchant.name, merchant.desc)
                ))}
            </div>
        );
    }
}