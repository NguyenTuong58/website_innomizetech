import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            <ul>
              <li>
                <a className="smoothscroll" href="#home">
                   <img className="logo" src="logo.png" width="160" height="50" alt=""/>
                 </a>
              </li>
            </ul>
              
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="logo">
              <a className="smoothscroll" href="#home">
                <img src="logo.png" width="160" height="40" alt=""/>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div class="dropdown-content">
              <a class="dropdown-item" href="#">Our Services</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Technologies & business Domains</a>
              </div>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Case studies 
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Blog
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Abouts us
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Career
              </a>
            </li>
            <li>
              <button type="button" class="btn btn-danger">Contact Us</button>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline-title">We provide</h1>
              <h1 className="responsive-headline-title-red">optimized IT solutions</h1>
              <h1 className="responsive-headline-title">for your business!</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>We are expert in Cloud computing, Web Development, Mobile Development, DevOps, and Automation Testing that help you meet your business needs.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <button type="button" class="btn btn-danger">Our Services</button>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;



