import React from 'react'

function Portfolio(props) {
    return (
      <span className="Portfolio-component" onClick={props.onClick}>
        {props.value}
        <a className="portfolio-link" href="../../containers/TicTacToe/index.js">TicTacToe</a>
        <br />
        <a className="portfolio-link" href="../../containers/calculator/index.js">Calculator</a>
        <br />
        <a className="portfolio-link" href="../../containers/Social-Card/index.js"> Social Card</a>
        <br/>
        <a className="portfolio-link" href="../../containers/Resume/index.js"> Resume</a>
      </span>
    )
}

export default Portfolio;
