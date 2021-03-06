import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import Logo from '../../assets/images/ctd-logo.png'


class Navigation extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  } 

  showMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
  
  return(
    <nav className="navigation">
      <div className="nav-content">
        <div className="logohello">
          <img className="hellologo"alt="hello" src={Logo} />
        </div>
        <div className="mobileMenuWrapper">
        <div className="hamburger" onClick={this.showMenu}>
          <div className="hbLayer"></div>
          <div className="hbLayer"></div>
          <div className="hbLayer"></div>
        </div>

        { this.state.showMenu ?
        <div className="mobile-ul-wrapper">
        <div className="close-mobile" onClick={this.showMenu}>X</div>
        <ul className="phoneMenu">
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>
          </li>
          </ul>
          </div> : null }
        </div>

        <div>
        <ul className="desktopMenu">
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.RESUME}>Resume</Link>
          </li>
          <li>
            <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>
          </li>
        </ul> 
       </div>
       </div>
      </nav>
  
    )
  }
}


export default Navigation;