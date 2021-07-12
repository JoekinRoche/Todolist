
import React from 'react';
import './App.css';

export default class App extends React.Component{
  constructor(props)
  {
super(props)
this.state={
  name:"Joekin",
};
  }
  ChangeName = () => {
    setInterval(()=>{
      this.setState(
        {
          name: "John",
        }
      )
    }, 10000);
  
}
render()
{this.ChangeName();
  return(
  <h1>Hello {this.state.name}</h1>)
};
}



