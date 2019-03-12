import React from 'react'

const Navbar = (props) => {
  return(
    <div className="NavbarContainer">
      <nav class="navbar fixed-top navbar-light bg-light">
        <br/>
        <button onClick={props.handleAbout} type="button" class="btn btn-light">About</button>
      </nav>
    </div>
  )
}

export default Navbar
