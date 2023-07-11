import React from 'react'

import "./scss/navbar.css"
import navLogo from "../../images/navlogo.png"
import { AiOutlineDown } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {

  // state for the hamburger menu 
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='nav__section'>

      {/* Navbar logo  */}
      <div className="nav__logo">
        <img src={navLogo} alt="nav logo" />
      </div>

      {/* Navbar components  */}
      <div className="nav__components">
        <ul className="nav__components-list">
          <li className="nav__components-list-links">
            <a href="">Nav1</a>
          </li>
          <li className="nav__components-list-links">
            <a href="">Nav2</a>
          </li>
          
            <div className="dropdown">
              <li className="nav__components-list-links dropbtn">
                <a href="">Nav3 <AiOutlineDown /></a>
              </li>
              <div className="dropdown-content">
                <a href="">Dropdown 1</a>
                <a href="">Dropdown 2</a>
                <a href="">Dropdown 3</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="nav__components-list-links dropbtn">
              <a href="">Nav4 <AiOutlineDown /></a>
              </button>
              <div className="dropdown-content">
                <a href="">Dropdown 1</a>
                <a href="">Dropdown 2</a>
                <a href="">Dropdown 3</a>
              </div>
            </div>
          

          <li className="nav__components-list-links">
            <a href="">Nav5</a>
          </li>
          <li className="nav__components-list-links">
            <a href="">Nav6</a>
          </li>
          <li className="nav__components-list-links">
            <a href="">Nav7</a>
          </li>
          <li className="nav__components-list-links">
            <a href="">Nav8</a>
          </li>
        </ul>
      </div>

      {/* small screen menu  */}
      <div className="nav__smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="nav__smallscreen__overlay flex__center slide-bottom">
            <RxCross1 fontSize={27} className='over__close' onClick={() => setToggleMenu(false)} />

            <ul className="nav__smallscreen-links">
              <li className="nav__components-list-links">
                <a href="">Nav1</a>
              </li>
              <li className="nav__components-list-links">
                <a href="">Nav2</a>
              </li>

              <div className="dropdown__nav">
              <div className="dropdown">
                <button className="nav__components-list-links dropbtn">
                <a href="">Nav3 <AiOutlineDown /></a>
                </button>
                <div className="dropdown-content">
                  <a href="">Dropdown 1</a>
                  <a href="">Dropdown 2</a>
                  <a href="">Dropdown 3</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="nav__components-list-links dropbtn">
                <a href="">Nav4 <AiOutlineDown /></a>
                </button>
                <div className="dropdown-content">
                  <a href="">Dropdown 1</a>
                  <a href="">Dropdown 2</a>
                  <a href="">Dropdown 3</a>
                </div>
              </div>
              </div>

              <li className="nav__components-list-links">
                <a href="">Nav5</a>
              </li>
              <li className="nav__components-list-links">
                <a href="">Nav6</a>
              </li>
              <li className="nav__components-list-links">
                <a href="">Nav7</a>
              </li>
              <li className="nav__components-list-links">
                <a href="">Nav8</a>
              </li>
            </ul>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
