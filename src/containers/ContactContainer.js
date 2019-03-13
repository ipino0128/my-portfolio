import React from 'react'

class ContactContainer extends React.Component{
  render(){
    return(
      <div className="contact">
      <br/> <br/> <br/>

      <h1> Contact me! </h1>
         <br/> <br/>
          <br/> <br/>
  <div className="container">
    <div className="row">
        <div className="col">
              <a href="mailto:ipino0128@gmail.com" target="" class="btn btn-secondary btn-lg">
              <span class="glyphicon glyphicon-envelope"></span>          ✉ Email Me</a>
              <br/> <br/> <br/> <br/>

          <a href="https://www.linkedin.com/in/isabelle-pino-b71274123/" id="blue" target="" class="btn btn-secondary btn-lg btn-info"> <i class="fab fa-linkedin-in"> </i> LinkedIn</a>

          <br/> <br/> <br/> <br/>
          </div>
        <div className="col">
  <a href="https://medium.com/@isabellepino" id="pink" target="" class="btn btn-secondary btn-lg btn-info"> <i class="fab fa-medium"></i> My Blog</a>
<br/> <br/> <br/> <br/>
      <a href="https://github.com/ipino0128/" id="black" target="" class="btn btn-secondary btn-lg btn-info"> <i class="fab fa-github"></i>  Github </a>
                  <br/> <br/> <br/> <br/>
                </div>

                </div>
                  <hr/>

                  <p> © 2019 Isabelle Pino. All rights reserved. </p>
                  <br/>
                  </div>
      </div>
    )
  }
}

export default ContactContainer
