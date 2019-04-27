import React from 'react';
import './App.css';
import Header from '../Header/header';

export default class App extends React.Component{
  render() {
      return (
          <div className="App">
              <Header/>
              <h1>Welcome</h1>
          </div>
      );
  }
}
