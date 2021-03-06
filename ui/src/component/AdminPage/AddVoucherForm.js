import React, {Component} from 'react'


export default class AddVoucherForm extends Component{
    state = {
        name: null,
        discount: null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });     
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <form className = "container border border-width" onSubmit = {this.handleSubmit} style = {{width: 350, height: 150}}>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style = {{width: 120}}>Name</span>
                        <input type="text" className="form-control " id = "name" aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" style = {{width: 120}}>Discount</span>
                        <input type="text" className="form-control " id = "discount" aria-label="Amount (to the nearest dollar)" 
                        onChange = {this.handleChange}/>  
                    </div>
                </div>
                <div className = "text-center">
                    <button type="submit" className="btn btn-primary mb-2">Add</button>
                </div>  
            </form>
        )
    }
}