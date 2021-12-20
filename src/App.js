import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import MainHeader from './components/MainHeader';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
    
    <MainHeader/>
   
    </div>
  );
}

export default withAuthenticator(App);
