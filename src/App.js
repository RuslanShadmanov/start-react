import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Profile from './components/Profile'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:'Ruslan',
      lName:'Shadmanov',
      age: 33,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
      
    }
  }

  // increment = ()=>{
  //   this.setState({counter:this.state.counter +1, message:'Successfuly Incremented'});
  // }
  // decrement = ()=>{
  //   this.setState({counter:this.state.counter -1,message:'Successfuly Decremented'});
  // }
  // reset = () => {
  //   this.setState({counter:0, message:'Reset'})
  // }
  


render(){
  const {name,lName,age,url}= this.state;
  
  return (
    <div className = "App">
      <Profile firstName={name} lastName={lName} age={age} url={url}/>
    {/* <Header msg={message} />
    <h2> {counter}</h2>
    <header>{headerMsg}</header>
    <Button btnName="Increment" handleClick={this.increment}/>
    <Button btnName="Decrement" handleClick={this.decrement}/>
    <Button btnName="Reset" handleClick={this.reset}/> */}
   
    
   

    </div>
    
  );
  }
}


export default App;
