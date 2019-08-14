import React, {Component} from 'react'
import axios from 'axios'
import Voucher from './Voucher';

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};

export default class VouchersBoard extends Component{
    state={
        voucherList: []
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/coCoBdkQeq?indent=2')
        .then(response =>{
            this.setState({
                voucherList: response.data
            })
        })
    }
    render(){
        return(
            <form action="">
                <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                    {this.state.voucherList.map(voucher => (
                        <Voucher name = {voucher.name} discount = {voucher.discount} owned = {voucher.owned}/>
                    ))}
                </div>
            </form>
        )
    }
}