import React, {Component} from 'react';
import axios from 'axios'
import Item from './Item';

export default class SelectItems extends Component{
    state = {
        login: "None",
        itemList: []
    }
    componentDidMount(){
        axios.get('http://www.json-generator.com/api/json/get/bVDvTRWfaW?indent=2')
        .then(response =>{
            this.setState({
                itemList: response.data
            })
        })
    }
    render(){
        return (
            <div className="col-4 text-center mb-4">
                <h4>Select Items</h4>
                <div className="container border"  style = {{width:300, height:400, overflow: "auto", borderWidth: "3px"}} > 
                    {this.state.itemList.map(item => (
                        <Item 
                        name = {item.name} 
                        description = {item.description}
                        price = {item.price}
                    />
                    ))}
                {/* <Item name = {"Buku Bagus"} description = {"mahal tapi"} price = {100000}/>
                <Item name = {"Buku mahal"} description = {"mahal tapi"} price = {220000}/>
                <Item name = {"Buku kecil"} description = {"mahal tapi"} price = {150000}/>
                <Item name = {"Buku Jelek"} description = {"murah tapi"} price = {10000}/> */}
                </div>      
            </div>     
             
        );
    }
}