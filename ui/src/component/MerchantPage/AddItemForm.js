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
        shortDesc: null
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
            <form className = "container border border-width" onSubmit = {this.handleSubmit} style = {customBox(350,190)}>
                <div className="input-group mb-3 mt-2 justify-content-center">
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Name</span>
                        <input type="text" className="form-control " id = "name" aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Price</span>
                        <input type="text" className="form-control " id = "Price" aria-label="Amount (to the nearest dollar)"
                        onChange = {this.handleChange}/>  
                    </div>
                    <div className="input-group-prepend mr-auto" style = {{width: 300}}>
                        <span className="input-group-text" style = {{width: 140}}>Short Desc</span>
                        <input type="text" className="form-control " id = "shortDesc" aria-label="Amount (to the nearest dollar)"
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