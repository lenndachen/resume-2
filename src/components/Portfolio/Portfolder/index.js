import React from 'react'

function Portfolio(props) {
    return (
      
      <span className="portfolio-component" onClick={props.onClick}>
        {props.value}
        <a className="portfolio-1" href="../../containers/TicTacToe/index.js">TicTacToe</a>
        <br />
        <a className="portfolio-2" href="../../containers/calculator/index.js">Calculator</a>
        <br />
        <a className="portfolio-3" href="../../containers/Social-Card/index.js"> Social Card</a>
        <br/>
        <a className="portfolio-4" href="../../containers/Resume/index.js"> Resume</a>
      </span>
    )
}

export default Portfolio;
