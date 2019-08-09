import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';


// import Client from "./Client";
import NavBar from "./component/NavBar"
import LoginPage from "./component/LoginPage"
import CustomerPage from './component/CustomerPage/CustomerPage';
import AdminPage from './component/AdminPage';
import MerchantPage from './component/MerchantPage';
import SelectItems from './component/SelectItems'

import './App.css';


// const Tech = ({match}) => {
//   return <div>Current Route: {match.params.tech}</div>
// };


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {title: ''};
  // }

  // async componentDidMount() {
  //   Client.getSummary(summary => {
  //     this.setState({
  //       title: summary.content
  //     });
  //   });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          {/* <SelectItems/> */}
          <Route exact path='/' component= {LoginPage} ></Route>
          <Route path='/customer' component= {CustomerPage} ></Route>  
          <Route path='/admin' component = {AdminPage}></Route>
          <Route path='/merchant' component = {MerchantPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
