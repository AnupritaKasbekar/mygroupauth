
import React, {useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Employee } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';


Amplify.configure(awsconfig);


function Export(props)
{
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
       <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-primary "
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
        <table id='table-to-xls' className="table table-stripped">
          <thead>
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



export default Export;

  