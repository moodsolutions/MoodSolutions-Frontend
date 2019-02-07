import React, { Component } from 'react';
const url = 'http://localhost:3001/offer';
class ShowOffer extends Component {
  
  state = {
  
  }
componentWillMount(){
  this.fetchOffers()
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

        {/* {this.props.renderProvidor} */}
        </div>
    )
  }
}

export default ShowOffer;