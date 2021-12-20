import { DataStore } from 'aws-amplify';
import React from 'react';
import { Employee } from '../models';
import { Component } from 'react';

import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';


Amplify.configure(awsconfig);

class Update extends Component{
  constructor(props)  {
       super(props);
      
       this.state = {
         
           pensionHolder:'' ,
           empid:'',
           empName:'',
           position:'',
           team:'',
           joindate:'',
           totalworkdays:'',
           avgannualsal:'',
           avgsalthrmonth:'',
           currentmonthpension:''
       };
      
     }
    
    
     handleTopicChange = event => {
       this.setState({
         pensionHolder: event.target.value
        
        })
     }
    
     handleSubmit = async(event)  =>{
       alert(`${this.state.empid} ${this.state.empName} ${this.state.position} ${this.state.team} ${this.state.joindate} ${this.state.avgannualsal} ${this.state.totalworkdays}`);

   
  
     const employee = await DataStore.query(Employee,post=> post.empid('eq',Number(this.state.empid)))
     alert('employee'+employee);
     await DataStore.save(
       Employee.copyOf(employee, update=>{
     
        update.empName=this.state.empName;
        update.position=this.state.position;
        update.team=this.state.team;
        update.joindate=this.state.joindate;
        update.avgannualsal=Number(this.state.avgannualsal);
        update.avgsalthrmonth=Number(this.state.avgsalthrmonth);
        update.totalworkdays=Number(this.state.totalworkdays);
        update.pensionHolder=Boolean(this.state.pensionHolder);
       })
     ) 
    
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
     handleworkdayChange = event =>{
       this.setState({
         totalworkdays:event.target.value
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
     handlecurrentmonthpensionChange = event =>{
       this.setState({
         currentmonthpension:event.target.value
       })
     }
      
     render() {
       return (
          
         <form onSubmit={this.handleSubmit}>
             <div> 
               
             <h1 className="text-center">Update Employee</h1>
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
             <input type="text" alue={this.state.avgsalthrmonth} onChange={this.handleavgsalthrmonthChange}  className="form-control" placeholder=""/>
             
             <label  className="form-label">Monthly Pension</label>
             <input type="text" value={this.state.currentmonthpension} onChange={this.handlecurrentmonthpensionChange}  className="form-control" placeholder=""/>
             <label className="form-label">No. Of Work Days</label>
             <input type="text" value={this.state.totalworkdays} onChange={this.handleworkdayChange}  className="form-control" placeholder=""/>
            
             <label>Pension Holder</label>
             <select value={this.state.pensionHolder} onChange={this.handleTopicChange}>
               <option value="no">Yes</option>
               <option value="yes">No</option>
             </select>
             </div>



           <button>Submit</button>
          
         </form>
       );
     }
}


export default Update;

