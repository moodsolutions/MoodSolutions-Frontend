import React, { Component } from 'react';
import './App.css';
import SignIn from './Components/SignIn';

class App extends Component {
constructor(){
  super();
  this.state={
    activeView:"landing",

  }
}
setView(view){
  this.setState={
activeView:view
  }
}
setUser(user){
  this.setState({
   user:user 
  });
}

}

export default App;
