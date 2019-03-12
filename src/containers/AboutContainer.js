import React from 'react'

class AboutContainer extends React.Component{
  render(){
    return(
      <div className="about">
        <br/> <br/> <br/> <br/>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1> Hi there! I'm Isabelle</h1>
              <br/> <br/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="icon.png" alt="icon"/>
              <br/> <br/>
            </div>
            <div className="col">
            <h3> Who am I? </h3><br/>
              <h5>
              - A Miami Native based in NYC. <br/><br/>
              - Full-stack web developer with a passion for entrepreneurship, creativity and analytical thinking. <br/><br/>
              -Strong financial and international business skills that help companies drive their goals and profits. <br/><br/>
              -Trilingual in English, Spanish & French. <br/><br/>
              -Love for fashion and lifestyle. <br/><br/>
              -Past experience in the media industry. <br/><br/>
              </h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContainer
