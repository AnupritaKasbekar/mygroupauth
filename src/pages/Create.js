import React from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';
/*import { render } from 'react-dom';*/
import { Component } from 'react';



import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';

Amplify.configure(awsconfig);

class Create extends Component{
  constructor(props)  {
    super(props);
    this.state = {
      empid:'',
      empName:'',
      position:'',
      team:'',
      joindate:'',
      avgannualsal: '',
      avgsalthrmonth:'',
      totalworkdays:'',
      pensionHolder:''
    };
  }


  handleSubmit = async(event)  =>{
    alert(`${this.state.empid} ${this.state.empName} `);
  const newPost = await DataStore.save(
      new Employee({
        empid: Number(this.state.empid),
        empName:this.state.empName,
        position:this.state.position,
        team:this.state.team,
        joindate:this.state.joindate,
        avgannualsal:Number(this.state.avgannualsal),
        avgsalthrmonth:Number(this.state.avgsalthrmonth),
        totalworkdays:Number(this.state.totalworkdays),
        pensionHolder:Boolean(this.state.pensionHolder)
       
      })
      
    );
    console.log(newPost);
    event.preventDefault();
  }
  handleIdChange = event =>{
    this.setState({
      empid:event.target.value
    })
  }
  handleNameChange = event =>{
    this.setState({
      empName:event.target.value
    })
  }
  handlePositionChange = event =>{
    this.setState({
      position:event.target.value
    })
  }
  handleTeamChange =event =>{
    this.setState({
      team:event.target.value
    })
  }

  handleJoinDateChange = event =>{
    this.setState({
      joindate:event.target.value
    })
  }
  handleavgannualsalChange =event =>{
    this.setState({
      avgannualsal:event.target.value
    })
  }
  handleavgsalthrmonthChange = event =>{
    this.setState({
      avgsalthrmonth:event.target.value
    })
  }
  handleworkdayChange = event =>{
    this.setState({
      totalworkdays:event.target.value
    })
  }

  handlePensionChange = event =>{
    this.setState({
      pensionHolder:event.target.value
    })
  }
  

  /*===========================handle property end======================== */
  render() {
    return (
       
      <form onSubmit={this.handleSubmit}>
          <div> 
            
          <h1 className="text-center">Create Employee</h1>
          <label  className="form-label">Enter Employee ID</label>
          <input type="text" value={this.state.empid} onChange={this.handleIdChange}  className="form-control" placeholder="123"/>

          <label className="form-label">Enter Employee Name</label>
          <input type="text" value={this.state.empName} onChange={this.handleNameChange} className="form-control" placeholder="Jack"/>

          <label className="form-label">Enter Employee Position</label>
          <input type="text" value={this.state.position} onChange={this.handlePositionChange}  className="form-control" placeholder="회장"/>

          <label className="form-label">Enter Employee Team Name</label>
          <input type="text" value={this.state.team} onChange={this.handleTeamChange}  className="form-control" placeholder="임원 (서울)"/>
              
          <label className="form-label">Enter Employee Join Date</label>
          <input type="Date" value={this.state.joindate} onChange={this.handleJoinDateChange}  className="form-control" placeholder=""/>
              
          <label className="form-label">Avarage Annual Salary</label>
          <input type="text" value={this.state.avgannualsal} onChange={this.handleavgannualsalChange}  className="form-control" placeholder=""/>
   
          <label className="form-label">Avarage Annual 3 month Salary</label>
          <input type="text" value={this.state.avgsalthrmonth} onChange={this.handleavgsalthrmonthChange}  className="form-control" placeholder=""/>

          <label  className="form-label">No. Of Work Days</label>
          <input type="text" value={this.state.totalworkdays} onChange={this.handleworkdayChange}  className="form-control" placeholder=""/>

          <label>Pension Holder</label>
              <select value={this.state.pensionHolder} onChange={this.handlePensionChange}>
                <option value="no">Yes</option>
                <option value="yes">No</option>
              </select>
              </div>     
          <button className="btn btn-primary">Submit</button>

          
        </form>
    )
}
}
export default Create;