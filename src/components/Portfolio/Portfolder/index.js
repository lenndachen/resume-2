import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import Tictactoe from '../../../../src/assets/images/Tictactoe.jpg'
import Calculator from '../../../../src/assets/images/Calculator.jpg'
import socialcard from '../../../../src/assets/images/socialcard.jpg'
import Interview from '../../../../src/assets/images/Interview.jpg'

const Portfolder = () => (
      
 <div className="portfolio-container">

        <div className="portfolio-tictactoe" href="../../containers/TicTacToe/index.js"><Link to={ROUTES.TICTACTOE}>TicTacToe</Link><img className="Tictactoe-pic" src={Tictactoe} alt="Tic Tac Toe Board"/></div>
        
        <div className="portfolio-calculator" href="../../containers/calculator/index.js"><Link to={ROUTES.CALCULATOR}>Calculator</Link><img className="Calculator-pic" src={Calculator} alt="Calculator Board"/></div>
   
        <div className="portfolio-socialcard" href="../../containers/Social-Card/index.js"><Link to={ROUTES.SOCIALCARD}>Social Card</Link><img className="Social-card-pic" src={socialcard} alt="Social Card Board"/></div>
    
        <div className="portfolio-resume" href="../../containers/Resume/index.js"><Link to={ROUTES.RESUME}>Resume</Link><img className="Resume-pic" src={Interview} alt="Resume Board"/></div>
</div>
    

)

export default Portfolder;
