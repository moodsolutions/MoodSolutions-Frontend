
import React from 'react';
import {Button} from '@material-ui/core';


const SignIn = props => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.handleSubmit}>
        {props.renderInput("email", "Email")}
        {props.renderInput("password", "Password", "password")}
        <Button className="btn btn-primary"> Login </Button>
      </form>
    </div>
  );
};


export default SignIn