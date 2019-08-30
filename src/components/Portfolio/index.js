import React from 'react'
import Game from '../../components/Tictactoe/Game';
import CalculatorMap from '../../components/Calculator/CalculatorMap'; 

function Portfolio(props) {
    return (
      <span className="Portfolio-component" onClick={props.onClick}>
        {props.value}
        <a className="portfolio-link" href="../../containers/TicTacToe/index.js">TicTacToe</a>
        <br />
        <a className="portfolio-link" href="../../containers/calculator/index.js">Calculator</a>
        <br />
        <a className="portfolio-link" href="../../containers/Social-Card/index.js"> Social Card</a>
      </span>
    );
  }
  
  export default Portfolio;
