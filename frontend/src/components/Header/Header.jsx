import React, { useEffect, useRef } from 'react'
import './header.css'
import { Button, Container, Row } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'

import logo from '../../assets/images/logo.png'

const nav_links = [
  {
    text: 'Home',
    path: '/home',
  },
  {
    text: 'About Us',
    path: '/about-us',
  },
  {
    text: 'Vacations',
    path: '/vacations',
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return window.removeEventListener('scroll', stickyHeader);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item">
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>{item.text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <CgMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
