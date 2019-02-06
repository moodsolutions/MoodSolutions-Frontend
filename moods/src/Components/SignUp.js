import React from 'react';
import Button from '@material-ui/core/Button';




const SignUp = ({ renderInput, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderInput("name", "Name")}
        {renderInput("phone","phone")}
        {renderInput("email", "Email")}
        {renderInput("password", "Password", "password")}
        <Button className="btn btn-primary"> SignUp </Button>
      </form>
    </div>
  );
};

export default SignUp;