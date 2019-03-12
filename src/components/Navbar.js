import React from 'react'

const Navbar = (props) => {
  return(
    <div>
        <nav class="navbar fixed-top navbar-light bg-light justify-content-end">
            <span onClick={props.handleAbout} class="fake-link" id="fake-link-1">About</span>
            <span onClick={props.handleAbout} class="fake-link" id="fake-link-1">Portfolio</span>
        </nav>
    </div>
  )
}

export default Navbar
