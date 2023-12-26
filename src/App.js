import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }

  increment = ()=>{
    this.setState((prevstate)=> {
      return {
        ...prevstate,
        counter: prevstate.counter +1
      }
    });
  }
  decrement = ()=>{
    this.setState((prevstate)=> {
      return {
        counter: prevstate.counter -1
      }
    });
  }
  reset = () => {
    this.setState({counter:0})
  }
  

render(){
  const {counter}= this.state
  return (
    <div className = "App">
    <h1> {counter}</h1>
    <button onClick={this.increment}>Increment</button>
    <button onClick={this.decrement}>Decrement</button>
    <button onClick={this.reset}>Reset</button>

    </div>
    
  );
  }
}


export default App;
