import ReactDropdown from 'react-dropdown';
import "react-datepicker/dist/react-datepicker.css";    
import React, {Component} from 'react';

class Products extends Component {
    render(){
        const options = ['try1', 'try2']
        const  defaultOption = null
        return(
            
            <div>
            <div className="row">
                <div className="col-sm-4 text-left">
                    <h2>Products</h2>
                </div>
                <div className="col-sm-4 text-left">
                <div className="row">
                    <div className="col">
                    <h5>Products</h5>
                    <ReactDropdown options={options}  value={defaultOption} placeholder="select" />
                    </div>
                    <div className="col">
                    <h5>Unit</h5>
                    <ReactDropdown options={options}  value={defaultOption} placeholder="select" />
                </div>
                   
                </div>
                <div className="row">
                    <div className="col" style={{paddingleft: 50}}>
                        <h5>Quantity</h5>
                        <ReactDropdown options={options}  value={defaultOption} placeholder="select" />
    
                    </div>
                    <div className="col">
                        <h5>Price</h5>
                        <ReactDropdown options={options}  value={defaultOption} placeholder="select" />
    
                    </div>
                    <div className="col" >
                        <h5>Total price</h5>
                        <ReactDropdown options={options}  value={defaultOption} placeholder="select" />
                    </div>
                    </div>
                </div>
            </div>
            </div>
              
        )
    }
}

export default Products