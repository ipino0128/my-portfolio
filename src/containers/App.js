import React, { Component } from "react";
import Header from '../components/Header'
import AboutContainer from './AboutContainer'
import Navbar from '../components/Navbar'


class App extends Component {
  handleAbout = () => {
    this.refs.about.scrollIntoView({behavior:"smooth"});
  }

  render() {
    return (
      <div className="App">
      <div className="Navbar">
        <Navbar handleAbout={this.handleAbout}/>
      </div>
      <div className="Header">
        <Header/>
      </div>
      <div className="about" ref="about">
        <AboutContainer/>
      </div>

      </div>
    )
  }
}

export default App
