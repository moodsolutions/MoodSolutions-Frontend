import React from 'react';
import './App.css';
import { TextField } from '@material-ui/core';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            name:''
            
        }
    }
    handelSubmit(event){
     event.priventdefault();
     const url = `http://localhost:3001/providers/${this.state.name}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data === null){
            this.props.setView('sign up')
        }
        console.log(data)
    })
    .catch(error=>console.log(error))
    }
    handleChange(event){
        this.setState=({
            name=event.target.value
        })
    }
    render(){
        return(
            <div className="sign-in">
            <h3>Sign in</h3>

            <form>

            <lable>User name:</lable><br></br>
            <TextField id="name"type="text" onChange={this.handleChange.bind(this)}name="name"/><br></br>

            <lable>Password:</lable><br></br>
            <TextField required type="text" onChange={this.handleChange.bind(this)}name="password"/>
            <br></br>
             <Button id="signInButton" variant="outline"onClick={this.handleSubmit.bind(this)}>Submit</Button>
           
            </form>
            
            
            </div>
        )
    }
    
}
export default SignIn