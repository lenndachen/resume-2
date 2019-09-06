import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import Tictactoe from '../../../../src/assets/images/Tictactoe.jpg'
import Calculator from '../../../../src/assets/images/Calculator.jpg'
import socialcard from '../../../../src/assets/images/socialcard.jpg'
import Interview from '../../../../src/assets/images/Interview.jpg'

const Portfolder = () => (
      
 <div className="portfolio-container">

       <Link to={ROUTES.TICTACTOE} className="portfolio-item"> <h3>TicTacToe</h3> <div className="port-img-wrapper"><img className="Tictactoe-pic" src={Tictactoe} alt="Tic Tac Toe Board"/></div></Link>
        
       <Link to={ROUTES.CALCULATOR} className="portfolio-item"> <h3>Calculator</h3><div className="port-img-wrapper"><img className="Calculator-pic" src={Calculator} alt="Calculator Board"/></div></Link>

       <Link to={ROUTES.SOCIALCARD} className="portfolio-item"> <h3>Social Card</h3><div className="port-img-wrapper"><img className="Socialcard-pic" src={socialcard} alt="Social Card Board"/></div></Link>

       <Link to={ROUTES.RESUME} className="portfolio-item"> <h3>Resume</h3><div className="port-img-wrapper"><img className="Resume-pic" src={Interview} alt="Resume Board"/></div></Link>
</div>
    

)

export default Portfolder;
