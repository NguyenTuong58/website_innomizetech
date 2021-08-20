import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">

{/* Cloud Computing */}
        <Slide left duration={1300}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 DivideInColumns1">
                <div className="container CloundImage">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="CloudComputingLogo">
                        <img src="Colud.PNG" width="110" height="30" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 DivideInColumns2">
                <div className="resume-services">
                  <i class="fab fa-battle-net"></i>
                  <span>Services</span>
                </div>
                <p className="title-services">Cloud Computing</p>
                <p className="services-content">Our certified cloud architechs/development provide cutting-edge designs to build-based and hybird application</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="fas fa-database"></i>
                        <p className="content-coud-text">Serverless Arch.</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-cloudversify"></i>
                        <p className="content-coud-text">Cloud Migration</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-mixcloud"></i>
                        <p className="content-coud-text">Cloud Integration</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="content-coud-text">
                        <i class="fab fa-cloudflare"></i>
                        <p className="content-coud-text">Cloud Consulting</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-cloudscale"></i>
                        <p className="content-coud-text">Cloud Optimization</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-cog"></i>
                        <p className="content-coud-text">DevSecOps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
{/* End Cloud Computing */}

{/* Software Develoment */}
        <Slide right duration={1300}>
          <div className="container">
            <div className="row">
              
              <div className="col-sm-6 DivideInColumns2">
                <div className="resume-services">
                  <i class="fab fa-battle-net"></i>
                  <span>Services</span>
                </div>
                <p className="title-services">Enterprise Solutions</p>
                <p className="services-content">Full Software Development life Cycle from requiremt analysis, design, coding, testing, deployment, maintenance and supporting</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="far fa-window-restore"></i>
                        <p className="content-coud-text">Web Development</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-compress-alt"></i>
                        <p className="content-coud-text">Product Migration</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-code-branch"></i>
                        <p className="content-coud-text">UX/UI Design</p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="fas fa-mobile-alt"></i>
                        <p className="content-coud-text">Mobie Development</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-th-large"></i>
                        <p className="content-coud-text">Platform Optimizing</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="far fa-circle"></i>
                        <p className="content-coud-text">Software Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 DivideInColumns1">
                <div className="container CloundImage">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="CloudComputingLogo">
                        <img src="Colud1.PNG" width="110" height="30" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
{/* End Software Development */}

{/* Dedicated Development Team */}

<Slide left duration={1300}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 DivideInColumns1">
                <div className="container CloundImage">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="CloudComputingLogo">
                        <img src="Colud2.PNG" width="110" height="30" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 DivideInColumns2">
                <div className="resume-services">
                  <i class="fab fa-battle-net"></i>
                  <span>Services</span>
                </div>
                <p className="title-services">Dedicated Development Team</p>
                <p className="services-content">We offer you specific teams for your specific your specific needs. We assign a customise skill set to each client so that project gets complate dedication and required attention.</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="fas fa-database"></i>
                        <p className="content-coud-text">In-house control level resources</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-cloudversify"></i>
                        <p className="content-coud-text">Bring fresh ideas to you & your own in-house IT department</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-mixcloud"></i>
                        <p className="content-coud-text">No recruitment costs</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="content-coud-text">
                        <i class="fab fa-cloudflare"></i>
                        <p className="content-coud-text">Wide range of technology expertise</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fab fa-cloudscale"></i>
                        <p className="content-coud-text">Free up your IT department to focus on critical tasks</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-cog"></i>
                        <p className="content-coud-text">Scalable resources</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

{/* End Dedicated Development Team */}

{/* Enterprise Solutions */}
<Slide right duration={1300}>
          <div className="container">
            <div className="row">
              
              <div className="col-sm-6 DivideInColumns2">
                <div className="resume-services">
                  <i class="fab fa-battle-net"></i>
                  <span>Services</span>
                </div>
                <p className="title-services">Enterprise Solutions</p>
                <p className="services-content">We work toward your business objectives, help you move fast and move fast and in the right direction. Our highly skilled engineers are ready are ready to consult, customize, integrate your existing enterprise systems</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="far fa-window-restore"></i>
                        <p className="content-coud-text">Optimization Solutions: ERP, CRM, HRM</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-compress-alt"></i>
                        <p className="content-coud-text">E-commerce Integration</p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="content-coud-text">
                        <i class="fas fa-mobile-alt"></i>
                        <p className="content-coud-text">Odoo Installation and Customization</p>
                      </div>
                      <div className="content-coud-text">
                        <i class="fas fa-th-large"></i>
                        <p className="content-coud-text">Enterprise Intergration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 DivideInColumns1">
                <div className="container CloundImage">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="CloudComputingLogo">
                        <img src="Colud3.PNG" width="110" height="30" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

{/* End Enterprise Solutions */}
      </section>
    );
  }
}

export default Resume;
