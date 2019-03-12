import React, { Component } from "react";
import Header from '../components/Header'
import AboutContainer from './AboutContainer'
import Navbar from '../components/Navbar'
import PortfolioContainer from './PortfolioContainer'
import ContactContainer from './ContactContainer'

class App extends Component {
  handleAbout = () => {
    this.refs.about.scrollIntoView({behavior:"smooth"});
  }

  handlePortfolio = () => {
    this.refs.portfolio.scrollIntoView({behavior:"smooth"});
  }

  handleContact = () => {
    this.refs.contact.scrollIntoView({behavior:"smooth"});
  }

  render() {
    return (
      <div className="App">
      <div className="Navbar">
        <Navbar handleAbout={this.handleAbout} handlePortfolio={this.handlePortfolio} handleContact={this.handleContact}/>
      </div>
      <div className="Header">
        <Header/>
      </div>
      <div className="about" ref="about">
        <AboutContainer/>
      </div>
      <div className="portfolio" ref="portfolio">
        <PortfolioContainer/>
      </div>
      <div className="contact" ref="contact">
        <ContactContainer/>
      </div>
      </div>
    )
  }
}

export default App
