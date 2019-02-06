

import React,{Component} from 'react';



class Show extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            catigory:'',
            image:'',
            offer:'',
        }
    }

    handleChange(event){
        const currentInput = event.target.name;
        consolelog('curent input is:',currentInput)
        const newValue = event.target.value;
        console.log('new value is:', newValue)

    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            [currentInput]:newValue
        })

    }
    render(){
        return(
            <div className="show">
            <Form className="form"onSubmit={this.handleSubmit.bind(this)}>
            <lable>Name:</lable><input type="text"value={this.state.name} name="name"onChange={this.handleChange.bind(this)}/>
            <lable>Category:</lable><input type="text"value={this.state.catigory}name="category"onChange={this.handleChange.bind(this)}/>
            <lable>Image:</lable><input type="text"value={this.state.image}name="image"onChange={this.handleChange.bind(this)}/>
            <lable>Offer:</lable><input type="text"value={this.state.offrt}name="offer"onChange={this.handleChange.bind(this)}/>
        
            
            </Form>
            
            </div>
        )
    }
}
   



   






export default Show

// render() {
//     return (
        
//         <div className="details">
//             <label>Name:{props.name}</label>
//             <lable>id:{props.place_id}</lable>
//             <lable>lon:{props.longitude}</lable>
//             <lable>lat:{props.latitudet}</lable>
//             <lable>Type:{props.type}</lable>

//         </div>
//     )
// }