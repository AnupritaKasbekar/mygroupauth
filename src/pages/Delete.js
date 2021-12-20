
import React from 'react';

import { Employee } from '../models';
import { DataStore } from '@aws-amplify/datastore';

import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';
import {Component} from 'react';


Amplify.configure(awsconfig);



class Delete extends Component
 {
   constructor(props){
     super(props);
     this.state = {
       value:''
     };
   }
  handleChange= event =>{
    this.setState({value: event.target.value});
  }
  
  handleSubmit= async(event)=> {
    alert('A name was submitted: ' + this.state.value);
   
    await DataStore.delete(Employee, employee => employee.empid('eq',Number(this.state.value)));
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Delete;