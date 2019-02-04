import React,{Component} from 'react';


class SignUp extends component{
    constructor(props){
        super(props);
        this.state={
            customerName:'',
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
        const url ='https//localcost:3001/customers'
        fetch(url,{
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
}