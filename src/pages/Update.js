
import React from 'react';

import { Employee } from '../models';
import { DataStore } from '@aws-amplify/datastore';

import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';
import {Component} from 'react';


Amplify.configure(awsconfig);

class Update extends Component
 {
   constructor(props){
     super(props);
     this.state = {
       empid:'',
       empName:''
     };
   }
  handleChange= event =>{
    this.setState({empid: event.target.value});
  }
  handleNameChange= event =>{
    this.setState({empName: event.target.value});
  }
  
  handleSubmit= async(event)=> {
    alert('A Id was submitted: ' + this.state.empid);
    alert('A Name was submitted: ' + this.state.empName);
   
   /* await DataStore.delete(Employee, employee => employee.empid('eq',Number(this.state.value)));*/
   const employee = await DataStore.query(Employee,post => post.empid('eq',Number(this.state.empid)));
   await DataStore.save(
    Employee.copyOf(employee,updated => {
       updated.empName = `test`;    
      })
   );

  };
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          ID:
          <input type="text" value={this.state.empid} onChange={this.handleChange} />
          EmpName:
          <input type="text" value={this.state.empName} onChange={this.handleNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Update;