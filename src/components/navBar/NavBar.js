import React from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import "./NavBar.css"
import logo from "../../assets/logo.png"
import {Button} from "../Button/Button"

class NavBar extends React.Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="logo"><img src={logo}></img></h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default NavBar;
