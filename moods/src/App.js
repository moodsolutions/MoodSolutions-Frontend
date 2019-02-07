import React, { Component } from 'react';
import './App.css';
import MoodSolutions from './Components/MoodSolutions';
import Providers from './Components/Providers';
// import ShowOffer from './Components/ShowOffer';
const url = 'http://localhost:3001/provider';
class App extends Component {

  state = {
    latitude: '',
    longitude: '',
    MoodSolutions: ["Login", "Singout", "Offers"],
    activeNav: ["providers"],
    user: null,
    catgories: [],
    providers: '',
    data: '',
  }

  fetchProviders() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let catgories = [...new Set(data.map(cat => cat.category))]
        catgories.push("all")
        this.setState({
          providers: data,
          catgories
        })
      })
      .catch(e => console.log(e))
  }
  fetchdata() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data       
         })
    this.renderProvidor();
      })
      .catch(e => console.log(e))
  }
  componentDidMount() {
    this.getMyLocation();
    this.fetchProviders();
    this.fetchdata()
  }


  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }
  renderProvidor() {
    
    const imageUrl = this.state.data.map((el, index) => {
      console.log(el)
      console.log(this.state.data)
      return (
        <div key={index}>
        <Providers el={el} catgories={this.state.catgories} />
          {/* <img scr={el.img} />
          
          <p>{el.name}</p>
<h2>{el.name}</h2> */}

        </div>
      )
  })

  return imageUrl;
  }
  onClickNav = (activeNav) => {
    console.log("\n\n\n\n\\n+++++++", activeNav)
    this.setState({ activeNav })
  }

  render() {
    const { latitude, longitude } = this.state

    return (
      <div>

        < MoodSolutions navs={this.state.MoodSolutions} active={this.state.activeNav} onClickNav={this.onClickNav} logout={this.logout} />
        <div className="container">

          {/* {this.state.activeNav === "offers" ? <Providers 
          catgories={this.state.catgories}
          renderProvidor={this.renderProvidor.bind(this) }/>  */}
          {this.state.activeNav === "offers" ? this.renderProvidor()
          
          : ""}
          {this.state.activeNav === "login" ? <h1>login form</h1> : ""}
          {this.state.activeNav === "signup" ? <h1>Signup form</h1> : ""}
          <div>
    
            </div>
          {/* <Map latitude={latitude} longitude={longitude}/> */}
          {/* <MapComp latitude={"46.619659"} longitude={"24.741917"}/> */}
          {/* <input type="text" value={latitude} />
        <input type="text" value={longitude} /> */}
        </div>
      </div>
    )
  }
}

export default App;