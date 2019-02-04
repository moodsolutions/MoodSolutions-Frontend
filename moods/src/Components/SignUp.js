import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignUp extends component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            phone:''
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const data={
            customerName:this.state.customerName,
            email:this.state.email,
            phone: this.state.phone
        }

        console.log('data',data)
        const API_URL = 'http://localhost:3001/providers'
        fetch(API_URL,{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => {
            console.log("SignUp successful for: ", data);

        })
    }
    handleChange(event){

    }
    render(){
        return(
            <div className="sign-up">
            <h3>Sign up</h3> 
            <form>
                <label>Name:</label><br></br>
            <TextField required type="text" onChange={this.handleChange.bind(this)}name="name" />
            <br></br>
            <lable>Email:</lable><br></br>
            <TextField required type="text" onChange={this.handleChange.bind(this)}name="email"/>
            <br></br>
            <lable>Password:</lable><br></br>
            <TextField required type="text" onChange={this.handleChange.bind(this)}name="password"/>
            
            <br></br>

            <Button id="signUpButton" variant="outline"onClick={this.handleSubmit.bind(this)}/>
            </form>
            </div>
            
        
        )
    }
}

export default SignUp;