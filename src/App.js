import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from '@aws-amplify/api';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function fetch() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
}

function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("https://4jn3tcfslb.execute-api.ap-southeast-2.amazonaws.com/dev/stop");
}

class App extends Component {
  
  state = { result: null };

  toggleButtonState = () => {
    let selectedWord = window.getSelection().toString();
    fetchAPI(selectedWord).then(result => {
      this.setState({ result });
    });
  };  

 render() {
    return (
      <div>
        <button onClick={this.toggleButtonState}> STOP </button>
        <div>{this.state.result}</div>
      </div>
    );
  }


}

export default withAuthenticator(App, true);
