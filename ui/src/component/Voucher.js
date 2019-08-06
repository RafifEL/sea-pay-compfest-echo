import React, {Component} from 'react';

const customBox = (width, height, overflow = "hidden") => {
    return {
        width: width,
        height: height,
        overflow: overflow
    };
};


const customVouchText = (nameVouch, disc, owned) =>{
    return(
        <div className="row m-1" style = {{height: 100, overflow:"auto"}} >
            <div className = 'col border text-left'>
                    <h5>Voucher {nameVouch}</h5>
                    <h6>Discount {disc}%</h6>
                    <small>Owned : {owned}</small>
            </div>        
        </div>
    );
}

export default class VouchersBoard extends Component{
    render(){
        return(
            <div className="col text-center mb-4">
                <h4>Vouchers</h4>
                <form action="">
                    <div className = "container border border-width" style = {customBox(350,300,"auto")}>
                        {customVouchText(this.props.voucherList[0].name, 
                            this.props.voucherList[0].discount, this.props.voucherList[0].owned)}
                        {customVouchText(this.props.voucherList[1].name, 
                            this.props.voucherList[1].discount, this.props.voucherList[1].owned)}
                        {customVouchText(this.props.voucherList[2].name, 
                            this.props.voucherList[2].discount, this.props.voucherList[2].owned)}
                        {customVouchText(this.props.voucherList[3].name, 
                            this.props.voucherList[3].discount, this.props.voucherList[3].owned)}
                    </div>
                </form>
            </div>
        )
    }
}