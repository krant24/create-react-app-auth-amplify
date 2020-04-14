import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from '@aws-amplify/api';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  
  render() {
    <button onClick={() => this.handleSmthng('foo')}>
      STOP
    </button>
  }
  
  handleSmthng(arg1) {
    let apiName = 'https://4jn3tcfslb.execute-api.ap-southeast-2.amazonaws.com/dev';
    let path = '/stop';
    let options = {
      headers: {...} // OPTIONAL
    }
    API.get(apiName, path, options).then(response => {
    // Add your code here
    });
  }
}

export default withAuthenticator(App, true);
