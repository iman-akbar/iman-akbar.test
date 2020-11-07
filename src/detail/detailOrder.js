
import ReactDropdown from 'react-dropdown';
import "react-datepicker/dist/react-datepicker.css";    
import React, {Component} from 'react';

import axios from 'axios'


const distibution = ['DDC tangerang', 'DC Cikarang']
const options2 = ['try1', 'try2']
const payment = ['cash H+1', 'cash H+2', 'cash H+3', 'Transfer H+1', 'Transfer H+2', 'Transfer H+3']

class detailOrder extends Component {
    constructor (props) {
        super(props)
        this.state = {
            array:[],
            employee_name:""
        }
        
    }
    
    
    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
            console.log('response', response)
            this.setState({array: response.data.data})
        })
        .catch(error => {
            console.log(error)
        })
               
    }
    
    
    render(){

const  defaultOption2 = null

const distributionoption = 'no data available'


const paymentoption = null
return(
    <>
      
      <div className="row">
      <div className="col-sm-4 text-left">
            <h2>Detail</h2>
        </div>
        
        <div className="col-sm-4 text-left">
        <div className="row">
        <div className="col">
            <h5>name</h5>
            <ReactDropdown options={this.state.array.employee_name}  value={this.state.array} placeholder="select" />
           
           
            

            </div>
            </div>
            <div className="row">
            <div className="col">
            <h5>Distribution Center</h5>
            <ReactDropdown options={distibution}  value={distributionoption} placeholder="select" />
            </div>
            </div>
            <div className="row">
            <div className="col">
            <h5>payment type</h5>
            <ReactDropdown options={payment}  value={paymentoption} placeholder="select" />
            </div>
            <div className="col">
            <h5>expired Date</h5>
            <ReactDropdown placeholder="select" />
            </div>
            </div>
            <div class="form-group">
                 <label for="exampleFormControlTextarea1">Notes</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
       
        </div>
        
        

    </>
    )
}
}

export default detailOrder
