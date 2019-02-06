

import React from 'react';
import { array } from 'prop-types';


class Show extends Component {
    constructor() {
        super();
        this.state = {

            data='',  //ChIJr4d7n-r9Lj4RsZqIlAO1z5w
           data2='',
            hover: false
        }

    }

    onMouseOverHandler(){
        this.setState({
            hover:true
        })
           }

           
//a
fetchOffers(){
    const url= `http://localhost:3001/offers/:provider_id`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('successful returned data', data)
    })
}
//b
fetchProviders(){
    const url= `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJmZNIDYkDLz4R1Z_nmBxNl7o&key=AIzaSyA1jA7nd60TgCZS4B7pKquBJYY5m9NfDKo`
    fetch(url)
    .then(response => response.json())
    .then(data2 => {
        console.log('successful returned data', data2)
    })
}
//c = b+c
getData(){
    
return(
    <Map latitudet={props.latitudet} longitude={props.longitude}onHover={this.onMouseOverHandler}/>
)

// if(this.fetchOffers === google.maps.places.name){
// return(
//     <div></div>
// )
// }
}



    // ShowProvidersOffer() {
    //     const url = `http://localhost:3001/offers/get`
    //     const url2 = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJmZNIDYkDLz4R1Z_nmBxNl7o&key=AIzaSyA1jA7nd60TgCZS4B7pKquBJYY5m9NfDKo/get`
    //     Promise.all([

    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log('successful returned data', data)
    //             })

    //         .fetch(url2) 
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log('successful returned data', data)
    //             })
    //     ])
    // }
  handleofferData(){
      return(
          <div className="offers">
          {offers.id}
          {offers.offer}
          
          </div>
      )
  }
  

        // if(google.maps.places.place_id ===this.offers.id){
        //  return(
        //      <div className="show"onMouseOver={this.onMouseOverHandler}>
             
        //      </div>
        //  )// connect  placeid in google api and offer id from our local host
        // }
    



    render() {
        return (
            
            <div className="details">
                <label>Name:{props.name}</label>
                <lable>id:{props.place_id}</lable>
                <lable>lon:{props.longitude}</lable>
                <lable>lat:{props.latitudet}</lable>
                <lable>Type:{props.type}</lable>

            </div>
        )
    }
}





export default Show

// i need to show the details of the providers through props