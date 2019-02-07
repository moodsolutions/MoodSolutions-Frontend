import React, { Component } from 'react';
const url = 'http://localhost:3001/offer';
// import ShowOffer from './ShowOffer' ; 

class Providers extends Component {

  state = {
    offers: [],
    showOffer: false,
    currentOffer: {},
    currentType: null
  }

  setCurrentType(currentType) {
    this.setState({ currentType })
    this.fetchOffers(currentType);
  }

  fetchOffers(cat) {

    console.log("\n\n\n\n\n\n\n\n\n\n 888888", this.state.currentType)

    let api = cat && cat !== "all" ? url + `?cat=${cat}` : url

    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ offers: data })

      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchOffers()
  }

  setCurrentOffer(currentOffer) {
    this.setState({ currentOffer })
  }

  renderOffers() {
    return (this.state.offers.map((offer, index) => <div> <div className="col" key={index} onClick={() => this.setCurrentOffer}>  {offer.offer}


    </div>
      <div>
        {this.props.renderProvidor}
      </div>
    </div>
    ))

  }
  renderCat() {
    return this.props.catgories.map((cat, index) => <div className="col" key={index} onClick={() => this.setCurrentType(cat)}>  {cat} </div>)
  }

  render() {

    return (
      <div className="container mb-5">
        <div>
            </div>
            <div className="row mb-5">
                {this.renderCat()}
            </div>

            <div className="row mb-5">
               {this.state.showOffer ? <showOffer/> : this.renderOffers() }
 
            </div>
        <img src={this.props.el.img} alt=""/>

        <p>{this.props.el.name}</p>
        <h2>{this.props.el.name}</h2>

      </div>
    )
  }
}

export default Providers;

