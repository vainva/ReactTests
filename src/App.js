
import React, { Component } from 'react';
import './App.css';
import Weather from'./Weather.js';
import List from'./List.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={counter: 0};
    }
  

    add = () => {
      this.setState((prevState) => {
      return {counter: prevState.counter + 1}
      });
      }
    remove = ()=>{
      this.setState((prevState) => {
        return {counter: prevState.counter - 1}
      });
      }

    reset = ()=>{
        this.setState((prevState)=>{
          return {counter: prevState.counter = 0}
        });
    }

  render() {
    return (
        <div>
        <div> Counter: {this.state.counter}</div>
        <br/>
        <button onClick={this.remove}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.reset}>reset</button>
        <Weather />
        <List />
      </div>
    );
  }
}

export default App;