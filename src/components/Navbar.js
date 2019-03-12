import React from 'react'

const Navbar = (props) => {
  return(
    <div>
        <nav class="navbar fixed-top navbar-light bg-light justify-content-end">
            <span onClick={props.handleAbout} class="fake-link" id="fake-link-1">About</span>
            <span onClick={props.handlePortfolio} class="fake-link" id="fake-link-1">Portfolio</span>
            <span onClick={props.handleContact} class="fake-link" id="fake-link-1">Contact</span>
        </nav>
    </div>
  )
}

export default Navbar
