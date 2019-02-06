import React, { Component } from 'react';
const url = 'http://localhost:3001/offer';
class ShowOffer extends Component {
  
  state = {
  
  }

  fetchOffers(cat){

   
    fetch( url )
      .then(response => response.json())
      .then( data => {
        console.log(data)
      })
      .catch( e => console.log(e))
  }
  

  render() {
    
    return (
        <div className="container">
            
        </div>
    )
  }
}

export default ShowOffer;