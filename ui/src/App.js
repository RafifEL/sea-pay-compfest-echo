import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';


// import Client from "./Client";
import Login from "./component/Login"
import NavBar from "./component/NavBar"
import CustomerMain from './component/CustomerMain';
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
          <SelectItems/>
          {/* <Route exact path='/' component= {Login} ></Route>
          <Route path='/customerhome' component= {CustomerMain} ></Route>      */}
        </div>
      </Router>
    );
  }
}

export default App;
