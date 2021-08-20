import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <p className="projects-title">Recent projects</p>
          <div className="container projects">
            <div className="row">
              <div className="col-md-12">
                <div class="f-projects">
                <div class="f-projects-col col-xs-12 col-md-12 col-ms-12">
                    <img src="Project1.png" width="296" height="225" alt=""/>
                    <a className="contentlink" href="#">
                        <p className="f-Project-title">Permits Platform</p>
                    </a>
                    <p className="Project-border"></p>
                    <p className="f-Project-content">Platform Project</p>
                  </div>
                  <div class="f-projects-col col-xs-12 col-md-12 col-ms-12">
                  <img src="Project2.png" width="296" height="225" alt=""/>
                  <a className="contentlink" href="#">
                    <p className="f-Project-title">1-1 Tutoring Platform</p> 
                  </a> 
                  <p className="Project-border"></p>  
                    <p className="f-Project-content">Web Project</p>
                  </div>
                  <div class="f-projects-col col-xs-12 col-md-12 col-ms-12">
                    <img src="Project3.png" width="296" height="225" alt=""/>
                    <a className="contentlink" href="#">
                      <p className="f-Project-title">TOTTER - ODOO System</p>
                    </a> 
                    <p className="Project-border"></p>
                    <p className="f-Project-content">ERP Project</p>
                  </div>
                  <div className="container ContainerSeeAllProject">
                    <div className="row">
                      <div className="col-md-12 SeeAllProject">
                        <a className="Projectlink" href="#">See All Project</a> 
                        <i class="fas fa-long-arrow-alt-right Projecticon"></i>
                      </div>
                    </div>
                  </div>
              </div>      
              </div>
            </div>
          </div>
        </Fade>
      </section>
      
    );
  }
}

export default Portfolio;
