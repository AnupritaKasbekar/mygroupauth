import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {Authenticator} from '@aws-amplify/ui-react';

const MainHeader = () => {
  return (
    <div className="App">
     
       <h1>Employee Pension </h1>
    <Link className="btn btn-primary" to="/Create">Create</Link> |
  
    <Link className="btn btn-primary" to="/Update">Update</Link>  |
    <Link  className="btn btn-primary" to="/Delete">Delete</Link>  |
    <Link className="btn btn-primary" to="/Search">Search</Link>  |
    <Link className="btn btn-primary" to="/GetList">Get List</Link> | 
    <Link className="btn btn-primary" to="/Export">Export</Link> 
    <p>This task will help you to get all the employee data</p>
    <Outlet/>
       <Authenticator>
    {({ signOut, user }) => (
        <main>
          <h1>Hello If you want to sign out plase click on sign out Button</h1>
          <button onClick={signOut} className="btn btn-primary">Sign out</button>
        </main>
      )}
    </Authenticator>
   </div>
  );
};

export default MainHeader;
