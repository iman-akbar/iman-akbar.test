// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'react-dropdown/style.css';
// import ReactDropdown from 'react-dropdown';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import detailOrder from './detail/detailOrder'
import Products from './Products/products'


// function App() {
//   return (
    // <div>
    //   <div className="row">
    //     <div className="col">
    //       <div className="card text-white bg-success mb-3 text-center">
    //         <div className="card-header"><h2>create order</h2></div>
    //       </div>
    //       <div className="container">
    //         <h3>Detail</h3>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
//     <detailOrder
//   );
// }

class App extends Component {
  render(){
    return (
      <div className="container">
      <h1 style={{textAlign: 'left'}}>Detail Order</h1>
      <Router>
         <Route component={detailOrder} />
         <Route component={Products} />
      </Router>
      </div>
    )
  }
  
}

export default App;
