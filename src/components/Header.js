import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    return (
      <>
        <a
          onClick={_ => this.toggleMenu(!openMenu)}
          className={`menu-toggle rounded ${openMenu ? 'active' : ''}`}
          href="/#"
        >
          {openMenu ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </a>
        <nav id="sidebar-wrapper" className={` ${openMenu ? 'active' : ''}`}>
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#page-top">{config.siteTitle}</a>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="class"
                element="page-top"
              >
                <a href="#page-top">Home</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="id"
                element="about"
              >
                <a href="#about">About</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="id"
                element="services"
              >
                <a href="#services">Services</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="id"
                element="portfolio"
              >
                <a href="#portfolio">Portfolio</a>
              </Scroll>
            </li>
            <li className="sidebar-nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="id"
                element="contact"
              >
                <a href="#contact">Contact</a>
              </Scroll>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
