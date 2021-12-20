import React, {useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';

function GetList(props){
  const [employees,setPosts] = useState([])

  useEffect(()=>{
    const funct = async ()=>{
      const models = await DataStore.query(Employee);
      setPosts(models)
    }
    funct()
  },[])
 
const tableRows = employees.map((employee)=>{
 
return(
<tr className="text-white">
<td>{employee.empid}</td>
<td>{employee.empName}</td>
<td>{employee.position}</td>
<td>{employee.team}</td>
<td>{employee.joindate}</td>
<td>{employee.avgannualsal}</td>
<td>{employee.totalworkdays}</td>
</tr>
);
});

  return(
    <div className="App">
    <h1>Get Employee Data</h1>
  
    <table className="table table-stripped">
      <thead className="text-white"  id='table-to-xls'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>Date</th>
          <th>AvgAnnualSal</th>
          <th>workday</th>
        </tr>
      </thead>
      <tbody>
       {tableRows}
      </tbody>
      
    </table>
   
    </div>
  );
}
export default GetList;