import React from 'react'

class PortfolioContainer extends React.Component{
  render(){
    return(
      <div className="portfolio">
        <br/> <br/>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1> My Portfolio</h1>

            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="LangLearners.png" alt="icon"/>
              <br/> <br/>
            </div>
            <div className="col">
            <h5> LangLearners </h5>
            <a href="https://github.com/ipino0128/Final-Project-Frontend">Github-Frontend </a>|
            <a href="https://github.com/ipino0128/Final-Project-Backend"> Github-Backend </a> |
            <a href="https://www.youtube.com/watch?v=LxWq7OGBpfE"> Video Demo</a>
            <p> SOLO PROJECT | A social media site that allows you to connect with other language learners from around the world and share flashcards.</p>
              <ul>
                <li>
                Developed backend framework and API with Ruby on Rails
                </li>
                <li>
                  Developed frontend framework with JavaScript, React.js, and Redux
                </li>
                <li>
                  Utilized HTML, CSS, and Semantic UI to stylize the application
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="MyTravels.png" alt="icon"/>
              <br/> <br/>
            </div>
            <div className="col">
            <h5> MyTravels </h5>
            <a href="https://github.com/ipino0128/travel-frontend">Github-Frontend </a>|
            <a href="https://github.com/ipino0128/travel-backend"> Github-Backend </a> |
            <a href="https://www.youtube.com/watch?v=LxWq7OGBpfE"> Video Demo</a>
            <p> SOLO PROJECT | A platform for users to share travel itineraries.</p>
            <ul>
              <li>
              Developed backend framework and API with Ruby on Rails
              </li>
              <li>
                Developed frontend framework with JavaScript and React.js
              </li>
              <li>
                Utilized HTML, CSS, and Semantic UI to stylize the application
              </li>
            </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="MySpooks.png" alt="icon"/>
              <br/> <br/>
            </div>
            <div className="col">
            <h5> MySpooks </h5>
            <a href="https://github.com/drubaby/MySpooks">Github </a> |
            <a href="https://www.youtube.com/watch?v=qSEQrppKcjg&feature=youtu.be"> Video Demo</a>
            <p> GROUP PROJECT | A halloween-themed web app that allows you to create monsters, spook others for points, and displays a leaderboard.</p>
            <ul>
              <li>
              Developed backend framework and API with Ruby on Rails
              </li>
              <li>
                Developed frontend framework with vanilla JavaScript
              </li>
              <li>
                Utilized HTML, CSS, and Bootstrap to stylize the application
              </li>
            </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="BrightIdeas.png" alt="icon"/>
              <br/> <br/>
            </div>
            <div className="col">
            <h5>Bright Ideas</h5>
            <a href="https://github.com/brianhkang1/brightideas-project">Github </a> |
            <a href="https://www.youtube.com/watch?v=21J1X9Od-2s&feature=youtu.be"> Video Demo</a>
            <p> GROUP PROJECT | A web app that allows you to show off your bright ideas and allows others to invest in your ideas. </p>
            <ul>
              <li>
              Developed backend and frontend framework with Ruby on Rails
              </li>
              <li>
                Utilized HTML, CSS, and Bootstrap to stylize the application
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
